document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        
        event.preventDefault();

       
        const nome = document.getElementById('nome').value.trim();
        const codicePostale = document.getElementById('codice-postale').value.trim();
        const indirizzo = document.getElementById('indirizzo').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confermaPassword = document.getElementById('conferma-password').value.trim();

    
        if (!nome || !codicePostale || !indirizzo || !email || !password || !confermaPassword) {
            alert('Tutti i campi sono obbligatori.');
            return;
        }

        if (!isValidPostalCode(codicePostale)) {
            alert('Il Codice Postale deve essere un numero di 5 cifre.');
            return;
        }

        if (password !== confermaPassword) {
            alert('Le password non corrispondono.');
            return;
        }


        console.log('Form submitted', { nome, codicePostale, indirizzo, email, password });
     
     
        alert('Registrazione completata con successo!');
    });

    function isValidPostalCode(postalCode) {
        return /^\d{5}$/.test(postalCode);
    }
});
