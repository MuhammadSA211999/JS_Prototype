function Person(name,age){
    // parent class
   this.name=name
   this.age=age
}

Person.prototype={
    eating:function(){
        console.log(`${this.name} is eating`);
        },
    playing:function(){
            console.log(`${this.name} is playing`);
            }}
function Cricketer(name,age,type,country){
    //sub class
    // Person function er property gulu Cricketer function e call() method diye niye asa
    Person.call(this)
    this.name=name
    this.age=age
    this.type=type
    this.country=country
}
// Person.prototype er method gulu Object.create() diye Cricketer er sathe join kora
Cricketer.prototype=Object.create(Person.prototype)

//Cricketer er default constructor ke overrite kora. Karon default constructor e prototype properties gulu nei.
Cricketer.prototype.constructor=Cricketer

const msa=new Cricketer('MSA',24,'Wicket-Keeper','Bangladesh')
Cricketer.prototype.reading=function(){
    console.log(`${this.name} is reading now`);
    
}
console.log(msa); // {name: 'MSA', age: 24, type: 'Wicket-Keeper', country: 'Bangladesh'}
//prototype method access kora zay
console.log(msa.reading()) // MSA is reading now

