//prototype inheritance converted into class inheritance
class Person{
    constructor(name,age){
        this.name=name 
        this.age=age
    }
    eating(){
        console.log(`${this.name} is eating`);
        }
}

class Cricketer extends Person{
    constructor(name,age,type,country){
        super(name,age)
        this.name=name
        this.age=age 
        this.country=country
        this.type=type
    }
    playing(){
        console.log(`${this.name} is playing`);
        
    }
    //polymorphism of extended super class method
    eating(){
        super.eating()
        console.log(`The man ${this.name} is eating`);
        
    }
    //getter
    get getName(){
        return this.name
    }
    //setter
    set setType(newType){
        this.type=newType
    }
    //static
    static isEqualAge(cricketer1,cricketer2){
        // static method e this er value nei, this direct class name ke point kore
        // static method instance e pawya zay na. 
        return cricketer1.age===cricketer2.age
    }
}

const msa=new Cricketer('MSA',24,'Wicket-Keeper','Bangladesh')
const pvs=new Cricketer('Parves',29,'Batsman','Bangladesh')
console.log(msa) //{name: 'MSA', age: 24, country: 'Bangladesh', type: 'Wicket-Keeper'}
// msa.playing() //MSA is playing
// console.log('from gtter',msa.getName);
// msa.setType='Batsman'
// console.log('from setType',msa.type);
//static method
const staticValue=Cricketer.isEqualAge(msa,pvs)
console.log(staticValue); //false
//polymorphism
console.log(msa.eating()); // (MSA is eating: from parent class Person) // (The man MSA is eating: from sub class Cricketer)



