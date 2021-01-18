// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.

var student = {
  'Name': 'John',
  'Surname': 'Doe',
  'Age': 20 + ' years old',
}

for (var key in student) {
  console.log(key + ': ' + student[key])
}

console.log('___________________________');


// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var school = {
  'students': [{
      'Name': 'John',
      'Surname': 'Doe',
      'Age' : 21,
    },
    {
      'Name': 'Jane',
      'Surname': 'Doe',
      'Age' : 25,
    },
    {
      'Name': 'Desmond',
      'Surname': 'Eagle',
      'Age' : 25,
    },
    {
      'Name': 'Dianne',
      'Surname': 'Ameter',
      'Age' : 29,
    },
    {
      'Name': 'Max',
      'Surname': 'Conversion',
      'Age' : 24,
    },
  ]
}


for (var i = 0; i < school.students.length; i++) {
  console.log('STUDENT N. ' + (i + 1));

  var guy = school.students[i];

  console.log('Name: ' + guy.Name);
  console.log('Surname: ' + guy.Surname);

}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.


while (school.students.length < 8) {

  var guy = {}

  guy.Name = prompt('What\'s your name?');
  guy.Surname = prompt('What\'s your surname?');
  guy.Age = prompt('How old are you?');

  school.students.push(guy);

  console.log('Name: ' + guy.Name);
  console.log('Surname: ' + guy.Surname);
  console.log('Age: ' + guy.Age);

}
