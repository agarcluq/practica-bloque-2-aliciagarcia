// En esta práctica debéis crear una clase "User" con tres propiedades. Estas propiedades son "name", "money" y "showMeTheMoney".
// En la clase debe haber un constructor para establecer el valor de cada una de estas propiedades en el orden en el que se han mencionado.

class Persona {
  constructor(name, money) {
    this.name = name;
    this.money = money;
   this.showMeTheMoney="El dinero del usuario es "+money;
  }
}
var usuariosInventados=[];

function getUsers() {
  fetch("./users.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(elemento => {
        let users1=new Persona(elemento.name,elemento.money);
        
        usuariosInventados.push(users1);  
      });
      console.log(usuariosInventados);
    });
}
function showMeTheMoneyFunc(){
 console.log("tu money");
}
// Una vez esté lista la clase tenéis que crear una instancia de dicha clase para cada uno de los usuarios que obtengáis del documento "users.json" usando el método fetch (al igual que hicistéis en el ejercicio 3). ok

// Al recorrer el array de usuarios, en cada iteración, debéis usar las propiedades "name" y "money" del usuario del json para añadirle sus valores al constructor en el parámetro que establezca el valor de la propiedad del objeto con el mismo nombre.ok

// Por ejemplo: Para instanciar el primer usuario de la lista haremos "new User(usuarioDelJson.name, usuarioDelJson.money, metodoDelusuario)". ok

// El tercer parámetro de cada objeto recibirá una función que sacará con un alert la frase "dinero del usuario" (opcionalmente podéis sustituir esta frase por el dinero que tiene el usuario de esa instancia). Esta función la declararéis fuera de la clase con el nombre "showMeTheMoneyFunc". ok

// Cada instancia de "User" se irá añadiendo en el array "users" con el método "push".
// Una vez hayáis añadido todas las instancias al array de usuarios, ejecutad el método "showMeTheMoney" del tercer usuario "Roberto".

//lama a la función users
getUsers();
