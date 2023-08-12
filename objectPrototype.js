// JS is a object based functional programming language.
//Object and array er reference create korle notun kore array/object create hoy na. Shudu mul object and arry er memmory location ke reffer kore.
const personMethods={
    eating(){
        console.log(`${this.name} is eating!`);
    },
    sleeping(){
        console.log(`${this.name} is sleeping for 3 hours`);
        }
}
function Person(name,age){
    let person={}
    person.name='MSA'
    person.age=24
    // person.eating=function(){
    //     console.log(`${this.name} is eating!`);
    // }
    // person.sleep=function(){
    //     console.log(`${this.name} is sleeping for 3 hours`);
    // }
    person.eat=personMethods.eating
    person.sleep=personMethods.sleeping
    return person
}
const msA=Person('MSA',24)
console.dir(msA);

const dev={
    name:'MSA',
    age:24,
    occupation:'developer'
}
const msa=Object.create(dev)
//Object.create() method er maddhyome parent er sob propert and methods child access korte pare. Eta hoy __proto__ method er karone.
// Zodi Object.create() method er maddyome kuno object create kora hoy, tahole create kora notun object __proto__() method er maddyome parent object er sob property notun child object access korte pare.
console.log(msa); // {} blank object
console.log(msa.name); // MSA

function Human(name,age){
    let person=Object.create(personMethods)
    person.name=name
    person.age=age
    return person
}
const student=Human('MSA',30)
console.log(student); //{name:'MSA',age:30} parent er kuno method visible na,tobe dot diye accsess kora zabe
console.log(student.eating()); // MSA is eating!







