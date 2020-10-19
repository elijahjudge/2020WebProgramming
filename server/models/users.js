/*  B"H
 */

 const data = [{ name: 'Elijah', age: 23},{name: 'johny toe-hands', age: 78}]

 async function getAll(){
     Promise.resolve()
     console.log('called get all')
     return data;
 }

 async function add(name,age){
     data.push({name,age})
 }

 
 module.exports = { getAll, add, search: async q => data.filter(x=> x.name == q) }