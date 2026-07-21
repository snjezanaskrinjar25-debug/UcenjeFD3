// varijabla je prostor u memoriji
// može biti različitih tipova podataka
// u JS ES6 postoje tri načina deklariranja varijabli
// 1. način je const
// ulaz
const ime = 'Pero' //prompt('Unesi ime')
// simuliram da je svaki puta korisnik unio Pero

// izlaz
console.log(ime) //ispisuje vrijednost varijable

// idemo vidjeti kojeg je tipa podatka varijabla ime
console.log(typeof ime) //ispisuje tip podatka varijable (string)

console.log('ime', typeof ime, ime)

console.log(`Dobar dan ${ime}!`)

// number
const unosGodina = '2026' // string

// konverzija u broj
const godina = Number(unosGodina) // number

console.log('unosGodina', typeof unosGodina, unosGodina,
    'godina', typeof godina, godina
)

const pi = parseFloat('3.14') // točka je zbog amerikanaca

console.log('pi', typeof pi, pi)

// tip podatka boolean - logička vrijednost

const logickaVrijednost = true // druga moguća vrijednost je false

console.log('logickaVrijednost', typeof logickaVrijednost, logickaVrijednost)

//logickaVrijednost=false Uncaught TypeError: Assignment to constant variable.


// 2. način deklariranja varijable (prava varijabla)

let broj = 7
console.log('broj', typeof broj, broj)

//let broj = 8 Uncaught SyntaxError: Identifier 'broj' has already been declared

broj = 8
console.log('broj', typeof broj, broj)

broj = 'Osijek' // mogu promjeniti tip podatka varijabla
console.log('broj', typeof broj, broj)

// 3. način deklariranja varijabli STARI nećemo koristiti
var x = 8
console.log('var x', typeof x, x)
x = '8'
console.log('var x', typeof x, x)
var x = true // dozvoljava i redeklariranje
console.log('var x', typeof x, x)

const velikiBroj = 45456436543564354354354354n // bigint
console.log('velikiBroj', typeof velikiBroj, velikiBroj)


// const se ne može deklarirati bez vrijednost
// const i; Uncaught SyntaxError: Missing initializer in const declaration

let varijabla;

console.log('varijabla', typeof varijabla, varijabla) // undefined je i tip i vrijednost

varijabla = 7
console.log('varijabla', typeof varijabla, varijabla)

// JSON - JavaScript Object Notation
const osoba = {
    id: 1,
    ime: 'Pero',
    placa: 2345.99,
    zaposlen: true
}

console.log('osoba', typeof osoba, osoba)
console.table(osoba)

// Array, niz, polja - a JS to zove object
const niz = [1, 2, 3, 3, 23, 4, 4, 4, 8] // uglata zagrada Alt Gr + F

console.log('niz', typeof niz, niz)
console.table(niz)

const json = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

console.table(json)


// u JS je i funkcija tip podatka

// stari način definiranja funkcije
function pozdrav() {
    console.log('Pozdrav iz funkcije!')
}

console.log('pozdrav', typeof pozdrav /*, pozdrav*/) // primjer komentara unutar sintake
// poziv funkcije
pozdrav()

// novi način definiranja funkcije
const pozdravi = () => console.log('Pozdrav iz nove funkcije')

console.log('pozdravi', typeof pozdravi)
pozdravi()

// ovo nećemo nikada koristiti
const id1 = Symbol('Edunova') //Edunova je opis, ali je vrijednost jedinstvena i mi ju ne znamo
const id2 = Symbol('Edunova')

console.log('id1', typeof id1, id1)
console.log('id2', typeof id2, id2)

// danas smo koristiti =
// = je operator dodjeljivanja

// operator usporedbe == i ===
// == usporedba po vrijednosti
// === usporedba i po vrijednosti i po tipu podatka
console.log('7' == 7) //true
console.log('7' === 7) // false
console.log(7 === 7) // true

console.log(id1 == id2) // false
console.log(id1 === id2) // false