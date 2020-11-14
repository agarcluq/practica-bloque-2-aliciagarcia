// En esta práctica debéis crear una clase "User" con tres propiedades. Estas propiedades son "name", "money" y "showMeTheMoney".
// En la clase debe haber un constructor para establecer el valor de cada una de estas propiedades en el orden en el que se han mencionado.
const users = [];
class User{
  constructor(name, money,showMeTheMoney){
  this.name=name;
  this.money=money;
  }
   showMeTheMoney(money){
     console.log(money)
   }
}
// Una vez esté lista la clase tenéis que crear una instancia de dicha clase para cada uno de los usuarios que obtengáis del documento "users.json" usando el método fetch (al igual que hicistéis en el ejercicio 3).
/*
function getUsers() {
    fetch("./users.json")
    .then(getResponseJsonData)
    .then(showMessage);
}
function getResponseJsonData(response) {
  return response.json();
}

function showMessage(data) {
  console.log(`El nombre del usuario es ${users.name}`);
}*/



function getUsers() {
  fetch("./users.json")
    .then(response => response.json())

    .then(data => {
      console.log("Lista completa del array original")
      console.log(data)
      console.log("Lista de nombres del array original")
      data.forEach(function(elemento, indice, data) {
        console.log(elemento.name);
      });

      console.log("Usuarios que tengán más de 500 array nuevo")
      let arrayFilter = data.filter(elemento => elemento.money > 500);
      arrayFilter.forEach(function(elemento, indice, data) {
        console.log(elemento.name);
      });
      console.log("Lista completa del array filtrado")
      console.log(arrayFilter)
    });
}

function showMessage(data) {
  console.log(`El nombre del usuario es ${data}`);
}
function esSuficientementeGrande(data) {
  data.forEach(function(elemento, indice, data) {
    console.log(elemento, indice);
  });

  //return data[1]>= 500;
}

getUsers();
// Al recorrer el array de usuarios, en cada iteración, debéis usar las propiedades "name" y "money" del usuario del json para añadirle sus valores al constructor en el parámetro que establezca el valor de la propiedad del objeto con el mismo nombre.
// Por ejemplo: Para instanciar el primer usuario de la lista haremos "new User(usuarioDelJson.name, usuarioDelJson.money, metodoDelusuario)".
// El tercer parámetro de cada objeto recibirá una función que sacará con un alert la frase "dinero del usuario" (opcionalmente podéis sustituir esta frase por el dinero que tiene el usuario de esa instancia). Esta función la declararéis fuera de la clase con el nombre "showMeTheMoneyFunc".
// Cada instancia de "User" se irá añadiendo en el array "users" con el método "push".
// Una vez hayáis añadido todas las instancias al array de usuarios, ejecutad el método "showMeTheMoney" del tercer usuario "Roberto".


