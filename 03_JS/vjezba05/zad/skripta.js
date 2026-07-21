const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
    // ovaj kod će se izvoditi svaki puta kada korisnik klikne na
    // gumb Izvedi
    // resetirati ću rezultat
    rezultat.innerHTML = ''
    rezultat.style.color = 'black'

    // varijable u kojima je tekst koje je korisnik unio
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    // koji je odabrani zadatak
    const zadatak = document.getElementById('zadatak').value

    if (zadatak === '1') {
        //početak 1. zadatka
        const a = Number(aString)

        // osiguravam da korisnik mora unijeti brojeve

        if (!a) { // ako nisi broj (ili si 0, NaN, null ili undefined)
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return //prekida izvođenje click funckije - short curcuiting
        }

        const b = Number(bString)
        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }

        // ja kao programer sam ovdje 100% siguran da su a i b brojevi
        rezultat.innerHTML = a > b ? a : b
        rezultat.style.color = 'green'

        // kraj 1. zadatka
    }


    if (zadatak === '2') {
        // početak 2. zadatka

        // kraj 2. zadatka
    }

    if (zadatak === '3') {
        // početak 3. zadatka

        // kraj 3. zadatka
    }
})