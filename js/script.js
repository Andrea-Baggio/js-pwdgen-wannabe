// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


let firstName = (prompt('Come ti chiami?'));

let userName = firstName;

document.getElementById('name').innerHTML = userName;



let secondName = (prompt('Qual è il tuo cognome?'));

let surName = secondName;

document.getElementById('surname').innerHTML = surName;



let favColor = (prompt('Qual è il tuo colore preferito?'));

let color = favColor;

document.getElementById('color').innerHTML = color;

