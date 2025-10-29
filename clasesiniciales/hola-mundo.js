/*let string1 = "Hola mundo"
let string2 = "javascript es genial"
let string3 = `${string1} feliz :)`
let string4 = string1 + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

//

let frace ='javascript es extremadamente genial'
console.log (frace.length)
console.log(frace.tolocalelowercase())
console.log(frace.toLocaleUpperCase())
console.log(frace.substring(0,10))
//cadena
//1.tipo entero y decimal
const entero =42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2. notacion cientifica
const cientifico = 5e3

//3. infinitos y nan
const infinito = Infinity
const noesunnumero = NaN

const resultado = 0.1 + 0.2 
console. log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado==0,3)

//operaciones avanzadas
const raizcuadrada = Math.sqrt(16)
const valorabsoluto = Math.abs(-7)
const aleatorio = Math.rondom()
console.log(raizcudrada)
console.log(valorabsoluto)
console.log(aleatorio)
  
const stringdecimal ='3.14'
const float = parsefloat(stringdecimal)
console.log(float)
console.log(typeof float)
const binary = '1010'
const decimal = parseint(binary, 2)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue) //concatena
console.log(stringValue + numberValue) //convatena
console.log(stringValue + booleanValue)//concatena
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log(booleanValue + stringValue)
console.log(booleanValue + )
const edad = prompt('Ingrese el la edad:');
function categoriaEdad(edad) {

    if (edad > 55) return 'adulto mayor';

    if (edad >= 18) return 'adulto';
    
    if (edad > 12) return 'joven';

    return 'niño';
}
const categoria = categoriaEdad(edad);

let subsidio = categoria === 'niño' || categoria === 'adulto mayor' ? 'si' : 'no';

console.log(`La categoría de la persona es: ${categoria} y tiene subsidio: ${subsidio}`);

const canasta = ['leche', 'pan', 'huevos', 'carne', 'verduras'];

canasta.forEach( (item, key) => { console.log('item=', item, ' key=', key) } );

const copiaCanasta = canasta.map( (item) => {
        if (item !== 'pan') {
            return `nuevo item ${item}` 
        } 
    }
);
const copiaCanasta2 = canasta.filter( (item) =>  item !== 'pan' );

console.log('copiaCanasta2=', copiaCanasta2);*/

/*
let canasta = ["manzana", "pera","naranja","uva"]

for (fruta of canasta){
    console. log(fruta)
}

const listadecompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
}

for (fruta in listadecompras) {
    console.log(fruta);
}
 for (fruta in listadecompras) {
    console.log(`${fruta} : ${listadecompras[fruta]}`)
 }
 */
/*
let contador =0;
while (contador < 10){
    console.log(contador);
    contador++;
}*/
/*
 function calculateDiscountedprice (price, diacountpercentaje) {
    const discount = (price + discountpercentaje) / 100
    const pricewhithdiscount = price - discount

    return pricewhithdiscount 
}
const originalprice = 100
const discountpercentaje = 20
const finalprice = calculateDiscountedprice(originalprice,discountpercentaje)

console.log('original price $' + originalprice)
console.log('discount: $' + discountpercentaje + '%')
console.log('price with discount: $' + finalprice)
*/
/*
const rocket = {
    name: 'falcon 9',
    launchMessage: function launchMessage () {
        console.log (this.name)
    }  
}

rocket.launchMessage()


const greting = (name) => {
return `hola, $(name)'

};

const  =(name ) => `Hola, ${name}`;

resultfun =Igreting1('juan');
const =Igreting2 =newhgreting('pedro');
*/

/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/
/*
const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
  }
}

signIn(username, password);
*/

// --- Function Definitions ---
/*
const foo = () => console.log("first");

// Fix: Corrected 'settimeout8' to 'setTimeout' and fixed the syntax.
const bar = () => setTimeout(() => console.log("second"), 500);

const baz = () => console.log("third");

// --- Execution of Functions ---

// The `bar` function is called first, but its console.log will be delayed by 500ms.
bar();
// `foo` and `baz` are executed synchronously immediately after `bar` is scheduled.
foo();
baz();

// --- Promise Example ---

// Fix: Corrected 'new promise' to 'new Promise' (capital 'P').
// Fix: Corrected the `reject` argument syntax.
/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if (operationSuccessful) {
            // Fix: Cleaned up the multi-line string.
            resolve("la operacion fue exitosa!");
        } else {
            // Fix: Corrected typo 'operaciom' to 'operacion' and 'errormenssage' to 'errorMenssage'.
            reject("fallo la operacion");
        }
    }, 2000);
});

// Fix: Corrected '.the' to '.then' and fixed the missing closing parenthesis/brace in the arrow function.
promise
    .then((successMessage) => {
        console.log(successMessage);
    })
    // Fix: Corrected '.catch' method's typo and fixed the parameter name.
    .catch((errorMessage) => {
        console.log(errorMessage);
    });

// --- Fetch Example ---

function fetchData() {
    // Fix: 'fetch' requires a full URL, including the protocol (e.g., 'https://').
    fetch("https://jsonplaceholder.typicode.com/posts")
        // Fix: Cleaned up the chained method syntax.
        .then((response) => response.json())
        .then((data) => console.log(data))
        // Fix: Cleaned up the chained method syntax and parameter name.
        .catch((error) => console.error("Fetch Error:", error)); // Use console.error for errors
}

// --- Execution of Fetch ---

fetchData();

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

// Función para enviar peticiones HTTP genéricas
async function sendHTTPRequest(method, url, data) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(Error HTTP: ${response.status});
  }

  const responseData = await response.json();
  return responseData;
}

// Función para obtener y mostrar los posts
async function fetchPosts() {
  try {
    const responseData = await sendHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(responseData);

    // Limpia la lista antes de volver a renderizar
    listElement.innerHTML = "";

    for (const post of responseData) {
      const postContainer = document.createElement("article");
      postContainer.id = post.id;
      postContainer.classList.add("post-item");

      // NUEVO ELEMENTO: Mostrar el ID del post
      const idElement = document.createElement("span");
      idElement.textContent = ID: $ {post.id};
      idElement.classList.add("post-id");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      const button = document.createElement("button");
      button.textContent = "DELETE Content";

      // Agregamos el ID al principio del post
      postContainer.append(idElement, title, body, button);
      listElement.append(postContainer);
    }
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }*/
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

// Función para enviar peticiones HTTP genéricas
async function sendHTTPRequest(method, url, data) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    // ❌ ERROR: Usabas interpolación sin comillas
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

// Función para obtener y mostrar los posts
async function fetchPosts() {
  try {
    const responseData = await sendHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(responseData);

    // Limpia la lista antes de volver a renderizar
    listElement.innerHTML = "";

    for (const post of responseData) {
      const postContainer = document.createElement("article");
      postContainer.id = post.id;
      postContainer.classList.add("post-item");

      // ✅ Corregido: Interpolación de texto dentro de comillas invertidas
      const idElement = document.createElement("span");
      idElement.textContent = `ID: ${post.id}`;
      idElement.classList.add("post-id");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      const button = document.createElement("button");
      button.textContent = "DELETE Content";

      // Agregamos el ID al principio del post
      postContainer.append(idElement, title, body, button);
      listElement.append(postContainer);
    }
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

// ✅ Corregido: faltaba punto y coma al final
fetchButton.addEventListener("click", fetchPosts);

function createpost(title, content){
  constuserid =Math.randos();
  const post = {
    title: title,
    body: content,
    userId: userid, 
  }

  sendHTTPRequest('POST','https://jsonplaceholder.typicode.com/posts', post);

}
form.addEventListener('submit', (event)=> {
  event.preventDefault();
  const title = event.currentTarget.querySelector('#title').value;
  const content = event.currentTarget.querySelector('#content').value;
  
  console.log (title, content);

});
postList.addEventListener('click', (event) =>{
  if (event.target.tagName === 'BUTTON'){
    const postId = event.target.closest('article').id;
    console.log("ID post selecionado:" , postId);
    "delete"
    sendHTTPRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
event.target.closest('article').remove();
  }
});

  

