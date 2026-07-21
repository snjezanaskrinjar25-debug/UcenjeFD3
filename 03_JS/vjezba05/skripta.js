// uvjetno grananje if

// if radi s boolean tipom podatka

const uvjet = true

// minimalna if sintaksa
if (uvjet) { // u if granu se ulazi ako je uvjet true
    console.log('Uvjet je true')
}

// OVO NIKADA NE RADITI - RED FLAG
if (uvjet == true) {
    console.log('NE, NE i NE')
}

// kako je if binarno grananje tako postoji i else grana
if (uvjet) {
    console.log('Uvjet je ispunjen')
    console.log('Ušao sam u if granu') // ovaj drugi red je opravdanje {}
}
else {
    console.log('uvjet je false')
    console.log('Ušao sam u else granu')
}

// korištenje {}
// kada se if ili else odnosi samo na jednu liniju, tada ne trebaju {}
console.log(uvjet)
if (uvjet)
    console.log('if bez {} !uvjet')
else
    console.log('else bez {} !uvjet')
//  console.log('Ispisati kada je false')  -> ovo bi se uvijek izvodilo

// puna (sve mogučnosti) if sintaksa

const ocjena = 3 // zamislimo da je ovo unio čovjek

if (ocjena === 3) {
    console.log('Dobar')
} else if (ocjena === 1) {
    console.log('Nedovoljan')
} else if (ocjena === 2) {
    console.log('Dovoljan')
} else if(ocjena<=0 || ocjena>5){ // logički ILI operator ||
    console.log('Nije ocjena')
}
// mogu imati koliko god želim else if...
else {
    console.log('veće od 3')
}

// ovaj izraz u obje grane ima poziv iste funkcije -> console.log
if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}else{
    console.log('Nije ocjena')
}

// ternarni operator ?:
// inline if
console.log(ocjena>=1 && ocjena<=5 ? 'Ocjena je valjana' : 'Nije ocjena')


// JS specifičnosti
// falsy i truly

// if radi s boolean tipom podatka (true ili false)

const ime = 'Ana'

if(ime){ // ime bi trebao biti boolean ALI NIJE jer je string ALI je prazan i zbog toga što je prazan on je falsy
    // truly
    console.log('Varijabla ime ima vrijednost')
}else{
    // falsy
    console.log('Varijabla ime NEMA vrijednost, prazna je -> \'\'') // \ je Atl Gr + Q
}

// falsy broj: 0
// falsy objekt = null
// falsy za varijablu: undefined
// falsy NaN (Not a Number)

const b = Number('15a2')

// parseInt('15a2') -> 15
// Number('15a') -> NaN

console.log(b)
// b je NaN -> falsy, !falsy = truly, a truly ulazi u if granu
if(!b){
    console.log('Nisi unio broj')
}else{
    console.log(b*10)
}