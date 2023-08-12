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
    //getter
    get getName(){
        return this.name
    }
    //setter
    set setType(newType){
        this.type=newType
    }
}

const msa=new Cricketer('MSA',24,'Wicket-Keeper','Bangladesh')
console.log(msa) //{name: 'MSA', age: 24, country: 'Bangladesh', type: 'Wicket-Keeper'}
msa.playing() //MSA is playing
console.log('from gtter',msa.getName);
msa.setType='Batsman'
console.log('from setType',msa.type);


