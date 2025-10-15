let string1 = "Hola mundo"
let string2 = "javascript es genial"
let string3 = `${string1} feliz :)`
let string4 = string1 + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

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

console.log('copiaCanasta2=', copiaCanasta2);
