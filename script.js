// En esta práctica debéis crear una clase "User" con tres propiedades. Estas propiedades son "name", "money" y "showMeTheMoney".
// En la clase debe haber un constructor para establecer el valor de cada una de estas propiedades en el orden en el que se han mencionado.

class Persona {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }
  showMeTheMoney(money) {
    console.log("el dinero del usuario es " + money);
  }
}
const usuariosInventados=[
  {"name": "Marta", "money": "800"},
  {"name": "Luis", "money": "1300"}
]
let persona1=new Persona("luis",500)
usuariosInventados.push(persona1);
usuariosInventados.forEach(elemento => {
      console.log(elemento)
});
function getUsers() {
  fetch("./users.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(elemento => {
        console.log(`${elemento.name} tiene ${elemento.money}`)
      });
    });
}

// Una vez esté lista la clase tenéis que crear una instancia de dicha clase para cada uno de los usuarios que obtengáis del documento "users.json" usando el método fetch (al igual que hicistéis en el ejercicio 3). ok

// Al recorrer el array de usuarios, en cada iteración, debéis usar las propiedades "name" y "money" del usuario del json para añadirle sus valores al constructor en el parámetro que establezca el valor de la propiedad del objeto con el mismo nombre.ok

// Por ejemplo: Para instanciar el primer usuario de la lista haremos "new User(usuarioDelJson.name, usuarioDelJson.money, metodoDelusuario)". ok

// El tercer parámetro de cada objeto recibirá una función que sacará con un alert la frase "dinero del usuario" (opcionalmente podéis sustituir esta frase por el dinero que tiene el usuario de esa instancia). Esta función la declararéis fuera de la clase con el nombre "showMeTheMoneyFunc". ok

// Cada instancia de "User" se irá añadiendo en el array "users" con el método "push".
// Una vez hayáis añadido todas las instancias al array de usuarios, ejecutad el método "showMeTheMoney" del tercer usuario "Roberto".
/*function getUsers() {
  fetch("./users.json")
    .then(response => response.json())
    .then(usuarios => {
      let user1 = new Persona("pepe",900,showMeTheMoneyFunc(900));
      //usuarios = [...user1];
      usuarios.push(user1)
      console.log(usuarios);
      data.forEach(elemento => {

        );

   
      });

    });
}

function showMeTheMoneyFunc(money) {
  console.log("el dinero del usuario es " + money);
}
//lama a la función users
getUsers();*/
