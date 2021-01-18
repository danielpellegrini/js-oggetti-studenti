// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.

var student = {
  'name' : 'John',
  'surname' : 'Doe',
  'age' : 20 + ' years old',
}

for (var key in student) {
  console.log(key + ': ' + student[key])
}


// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
