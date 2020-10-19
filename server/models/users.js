/*  B"H
 */

 const data = [{ name: 'Elijah', age: 23},{name: 'johny toe-hands', age: 78}]

 function getAll(){
     return data;
 }

 function add(name,age){
     data.push({name,age})
 }

 
 module.exports = { getAll, add, search: q => data.filter(x=> x.name == q) }