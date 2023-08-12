// Kuno ekti function ke diffrent context e re-use korar jonno "this" keyword use hoy
// implicit binding :kun jaygay call hoyeche dot er age ki ache....
// explicit binding
// new binding 
// window binding 


var msa={
    name:'MSA',
    age:24,
    printName:function(){
        console.log(`${this.name} from printName`);
        }
}
// msa.printName()

function Person(name,age){
    father:{
        name:'Mr. Numan',
        printName=function(){
          console.log(`${this.name}`);
          }
    };
    return {
        name:name,
        age:age,
        printName(){
            console.log(`${this.name}`);
            }
        }
        
}
// msa=Person('MSAA',24)
// msa.printName()
// fatherName=msa.father.printName()
// console.log(fatherName);

//Explicit binding
const printName=function(v1,v2,v3){
    console.log(`${this.name} is ${vertue1}, ${vertue2} and ${vertue3}`);
    
}
const msa2={
    name:'MSA',
    age:24
}

const vertue1='Polite'
const vertue2='Smart'
const vertue3='Patience'
// printName.call(msa2) //MSA from outer func
// printName.apply(msa2,[vertue1,vertue2,vertue3]) //MSA is Polite, Smart and Patience

//explict this by bind() method
//bind() method function er instance/function return kore, zeti call korle value paway zay. bind() method er maddhyome kuno ekti object er method dhar-reen kore onno arekti object e use kora za
const bindFunc=printName.bind(msa,vertue1,vertue2,vertue3)
console.log(bindFunc()); //MSA is Polite, Smart and Patience

//new binding







