
document.getElementById('btnRun').addEventListener('click', () => {
    // Dohvaćanje vrijednosti iz inputa 
    const a = document.getElementById('valA').value
    const b = document.getElementById('valB').value
    const c = document.getElementById('valC').value
    const d = document.getElementById('valD').value

    const task = document.getElementById('taskSelect').value
    let rezultat
    //debugger
    // Za svaki zadatak zahtijevamo određene ulaze
    if (task === '1') {
        // Početak 1. zadatka
        // 1. Zbrajanje brojeva: Zbroji A i B (konverzija u Number)

    
        // Kraj 1. zadatka
    }

    if (task === '2') {
        // Početak 2. zadatka
        // 2. Konkatenacija: Spoji A i B kao tekst (String)


        // Kraj 2. zadatka
        
    }

    if (task === '3') {
        // Početak 3. zadatka
        // 3. Aritmetika i zagrade: Izračunaj (A + B) * C - D


        // Kraj 3. zadatka
        
    }

    if (task === '4') {
        // Početak 4. zadatka
        // 4. Modulo operator: Ostatak pri dijeljenju A s B (A % B)


        // Kraj 4. zadatka
        
    }

    if (task === '5') {
        // Početak 5. zadatka
        // 5. Stroga jednakost: Jesu li A i B identični po vrijednosti i tipu (A === B)?


        // Kraj 5. zadatka
        
    }

    if (task === '6') {
        // Početak 6. zadatka
        // 6. Relacijski operatori: Je li zbroj A i B veći od umnoška C i D?


        // Kraj 6. zadatka
        
    }

    if (task === '7') {
        // Početak 7. zadatka
        // 7. Logički AND (&&): Je li A pozitivno I istovremeno B parno?


        // Kraj 7. zadatka
        
    }

    if (task === '8') {
        // Početak 8. zadatka
        // 8. Logički OR (||): Je li barem jedno od polja C ili D prazan string?


        // Kraj 8. zadatka
        
    }

    if (task === '9') {
        // Početak 9. zadatka
        // 9. Operator typeof: Ispiši tip podatka za izraz (A * B)


        // Kraj 9. zadatka
        
    }

    if (task === '10') {
        // Početak 10. zadatka
        // 10. Ternarni operator: Ako je A > B ispiši vrijednost C, inače ispiši D


        // Kraj 10. zadatka
        
    }
    if (task === '11') {
        // Početak 11. zadatka
        // 11. Inkrement / Dekrement: Izračunaj trik izraz (A++ - --B)


        // Kraj 11. zadatka
    }

    if (task === '12') {
        // Početak 12. zadatka
        // 12. Različito (!= vs !==): Usporedi A i B po vrijednosti (!=) i po tipu (!==)


        // Kraj 12. zadatka
    }

    if (task === '13') {
        // Početak 13. zadatka
        // 13. Nullish Coalescing (??): Ako je A prazan string, koristi default vrijednost iz B


        // Kraj 13. zadatka
    }

    if (task === '14') {
        // Početak 14. zadatka
        // 14. Array i Spread operator (...): Spoji [A, B] i [C, D] u jedan novi niz


        // Kraj 14. zadatka
    }

    if (task === '15') {
        // Početak 15. zadatka
        // 15. Destrukturiranje niza: Iz niza [A, B, C, D] izvuci prva dva elementa u zasebne varijable i ispiši ih u konzolu


        // Kraj 15. zadatka
    }

    if (task === '16') {
        // Početak 16. zadatka
        // 16. Rad s objektima: Kreiraj JSON objekt { ime: A, grad: B } i ispiši ga u konzolu


        // Kraj 16. zadatka
    }

    if (task === '17') {
        // Početak 17. zadatka
        // 17. Optional Chaining (?.): Sigurno pročitaj svojstvo iz ugniježđenog objekta


        // Kraj 17. zadatka
    }

    if (task === '18') {
        // Početak 18. zadatka
        // 18. Logički NOT (!): Obrni logičku vrijednost provjere (je li A veće od B)


        // Kraj 18. zadatka
    }







    // Prikaz rezultata na ekranu
    const display = document.getElementById('display')

    display.innerText = rezultat
})