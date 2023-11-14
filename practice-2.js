const persons = [
    {id: "ID01", name: "Abul vai", age: 23},
    {id: "ID02", name: "Babul vai", age: 43},
    {id: "ID03", name: "Habul vai", age: 54},
    {id: "ID04", name: "Jabul vai", age: 29}
 
]
let obj = {};
persons.map(p =>{
    const id = p.id;
    const name = p.name;
    obj[id] = name;
})
console.log(obj);
/* convert into this:
    {
        ID01: "Abul vai",
        ID02: "Babul vai"
    }
*/

// let obj = {};
// obj.ID01 = "Abul vai";
// obj["ID02"] = "Babul vai";
// const property = "ID03";
// obj[property] =  "Mabul vai";
// console.log(obj);
