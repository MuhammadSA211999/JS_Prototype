// prototype hocce zekuno function er ekti property za kuno ekti object ke point kore.prototype property constructor function ke return kore. Prototype property er maddyome JS e parent er kuno kichu child er moddhye inherit hoy.
function Person(name,age){
    // let person=Object.create(Person.prototype)
     // let this=Object.create(Person.prototype)
    this.name=name
    this.age=age 
    // return person
    // return this 
}
//function Person ekti constructor function

Person.prototype={
    eat(){
        console.log(`${this.name} is eating`);
        },
    play(){
            console.log(`${this.name} is plying`);
            }
}

const sakib= new Person('MSA',24)
console.log(sakib.play());

class Professional{
    constructor(name,age,occup){
        this.name=name;
        this.age=age;
        this.occup=occup
    }
    reading(){
        console.log(`${this.name} is reading`);
        }
    writting(){
        console.log(`${this.name} is writting`);
        
    }
}

const msa=new Professional('MSA',34,'Developer')
console.log(msa.age);

console.log(Object.prototype);
console.log(Array.prototype);


