// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


const firstName = (prompt('Come ti chiami?'));

const secondName = (prompt('Qual è il tuo cognome?'));

const favColor = (prompt('Qual è il tuo colore preferito?'));

const password = firstName + secondName + favColor + '22';

document.getElementById('password').innerHTML = password;
