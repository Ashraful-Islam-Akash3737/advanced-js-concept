const polapain = [
    {name: "Abul", job: "sorkari", selery: 17000},
    {name: "Babul", job: "besorkari", selery: 25000},
    {name: "Kabul", job: "sorkari", selery: 21000},
    {name: "Habul", job: "besorkari", selery: 47000},
    {name: "Jabul", job: "sorkari", selery: 23000},
    {name: "Mabul", job: "besorkari", selery: 55000},
]

const vhaggovans = polapain.filter(product => (product.job === "sorkari" && product.selery >= 20000) || (product.job === "besorkari" && product.selery >= 40000));
console.log(vhaggovans);
const vhaggovanPolaIs = Math.floor(Math.random() * vhaggovans.length);
const finalWinnerIs = vhaggovans[vhaggovanPolaIs].name;
console.log(finalWinnerIs);