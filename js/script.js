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
    },
    {
      'Name': 'Jane',
      'Surname': 'Doe',
    },
    {
      'Name': 'Desmond',
      'Surname': 'Eagle',
    },
    {
      'Name': 'Dianne',
      'Surname': 'Ameter',
    },
    {
      'Name': 'Max',
      'Surname': 'Conversion',
    },
  ]
}


for (var i = 0; i < school.students.length; i++) {
  console.log('STUDENT N. ' + (i + 1));

  var guy = school.students[i];

  for (var key in guy) {
    console.log(key + ': ' + guy[key]);

  }
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.


while (school.students.length < 8) {

  var guy = {}

  guy.Name = prompt('What\'s your name?');
  guy.Surname = prompt('What\'s your surname?');
  guy.Age = prompt('How old are you?');

  school.students.push(guy);

  for (var i = 0; i < school.students.length; i++) {
    console.log('STUDENT N. ' + (i + 1));

    var guy = school.students[i];

    for (var key in guy) {
      console.log(key + ': ' + guy[key]);

    }
  }

}
