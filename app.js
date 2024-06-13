// write code here
const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];

const groupedPersons = persons.reduce((acc, person) => {
  if (!acc[person.sex]) {
    acc[person.sex] = [];
  }
  acc[person.sex].push(person.name);
  return acc;
}, {});

console.log(groupedPersons);

