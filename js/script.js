// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


let firstName = (prompt('Come ti chiami?'));

let secondName = (prompt('Qual è il tuo cognome?'));

let favColor = (prompt('Qual è il tuo colore preferito?'));

let password = firstName + secondName + favColor + '22';

document.getElementById('password').innerHTML = password;
