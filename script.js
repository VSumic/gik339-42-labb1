// Kommentarer för uppgift 5. 
// När HTML sidan blir parsed, kommer DOMContentLoaded eventet att köra.
document.addEventListener('DOMContentLoaded', function () {
    //Vi börjar först med att hämta referenser från våra HTML element och lägger in dessa referenser i variabler
     // I vår färg..
    var fargInput = document.getElementById('farg');
    // Innehåll..
    var innehallInput = document.getElementById('innehall'); 
    // Vår checkbox..
    var divStyleCheckbox = document.getElementById('divStyle'); 
    // Vår knapp "ta bort" knapp..
    var removeButton = document.getElementById('removeButton'); 
    // Och till sist vår output textbox
    var outputDiv = document.getElementById('outputDiv'); 

    //Vi har alltså änvänt DOM-funktionen 'getElementById' för att hitta ett specifikt element objekt som matchar ID:et
    //som tex "outputDiv", och sparat det värdet i våra 'vars'


    // Har har vi en eventlistener som som triggas vid input i FargInput textfältet av anvädaren
    fargInput.addEventListener('input', function () {
        // Och när detta sker loggar vi eventet i konsolen
        console.log(fargInput);
        // Och om checkboxen är ikryssad så ändrar vi bakrundsförgen på vår output till till det angivna värdet
        if (divStyleCheckbox.checked) {
            outputDiv.style.backgroundColor = fargInput.value;
        }
    });

    // Vi har en eventlistener som triggas vid input i innehallInput elementet..
    innehallInput.addEventListener('input', function () {
        // Vi loggar eventet till konsolen även här
        console.log(innehallInput);
        // Och vi uppdaterar textinnehållet i outputdiv med det som skrivs i innehållsfältet av användaren
        outputDiv.textContent = innehallInput.value;
    });


    
    //Kommentarer för uppgift 6
    // Här ser vi att vi har en event listener av typen "change", så, när användaren ändrar status på checkboxen kommer en av två
    // handlingar utföras
    divStyleCheckbox.addEventListener('change', function () {
        // Om vår checkboxen är ikryssad, så kommer vi att använda färgvärdet från färgfältet som bakgrundsfärg
        // Detta värde styrs då så klart beroende på vad användaren har angett i textboxen "farg"
        // Som kommer vara sparat i variablen fargInput
        if (this.checked) {
            // VI ser då här att bakgrundsfärgen är like med vår value från vår var "fargInput" sen tidigare
            outputDiv.style.backgroundColor = fargInput.value;
        } else {
            // Och om checkboxen inte är ikryssad, ta bort vi bara bort bakgrundsfärgen med en tom sträng
            outputDiv.style.backgroundColor = '';
        }
    });

    // Slutligen har vi en till event listener på vår "ta bort" knapp, av typen "click". Och när knappen trycks..
    removeButton.addEventListener('click', function () {
        // ...tar vi bort output div från dokumentet
        outputDiv.remove(); 
    });
});