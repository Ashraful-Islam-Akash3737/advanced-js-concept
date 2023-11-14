// find those students email whose avg is >= 50 and fiftyPercent === true

const students = [
    {name: "mehedy", email: "mehedy@gmail.com", avg: 56, fiftyPersent: true},
    {name: "rokib", email: "rokib@gmail.com", avg: 57, fiftyPersent: false},
    {name: "sakib", email: "sakib@gmail.com", avg: 42, fiftyPersent: false},
    {name: "sojib", email: "sojib@gmail.com", avg: 52, fiftyPersent: true},
    {name: "sunny", email: "sunny@gmail.com", avg: 32, fiftyPersent: false},
    {name: "saki", email: "saki@gmail.com", avg: 37, fiftyPersent: true},
    {name: "jackie", email: "jackie@gmail.com", avg: 57, fiftyPersent: true},
]
const result = students.filter(student => student.avg >= 50 && student.fiftyPersent === true).map(students => students.email).join(", ");
console.log(result);
