// use map, filter and find
const students = [
    {id:20, name:'Rani'},
    {id:30, name:'Bani'},
    {id:40, name:'Nick'},
    {id:50, name:'Apu'}
];

const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const name = element.name;
    output.push(name);
    
}
console.log(output);
 
// use to map for shortcut 

const name =students.map(s => s.name);
const id =students.map(s => s.id);
const id =students.filter(s => s.id>30)
const id =students.find(s => s.id>30)
console.log(name, id );
console.log(id);