// // task 1

// let user ={
//     name:'nikeet',
//     surename:'Patil',
    
// }
// user.name="nikeet";
// delete surename

// for(let key in user){
//     console.log(user[key]);
// }
// // task 2
// let salaries={
//     john:1500,
//     nik:4520,
//     vik:5000,
//     aym:8785,

// }
// let sum =0;
// for(let sal in salaries){
//     sum=sum+salaries[sal];
// }
// console.log('sum is:',sum);

// // task3
// let pageInfo={
//     width:500,
//     height:800,
//     title:"page"
// }

// let totalSum=0;

// for(let amount in pageInfo){
//     if(typeof pageInfo[amount]== 'number'){
//         pageInfo[amount] *= 2;
//     }
// }
// console.log('total amount:',totalSum);
// console.log(pageInfo);

// 

// for(let property in candidatInfo){
// newCandidate[property]= candidatInfo[property];
// }
// Object.assign(newCandidate,candidatInfo);
//  let person ={
//      pname:"nikee",
//      gender:"male",
//      sayHi:function(){
//         return'Hello ${person.pname}';
//      },
//  }

//  let person2=person;
//  person2[pname]='patil';
//  console.log(person2.sayHi());

// calculator..

// let calculator = {
//     num1:0,
//     num2:0,
//     read:() => {
//         num1=prompt('enter first number');
//         num2=prompt('enter secound number');
//         console.log(num1,num2);
        
//     },
//     add:() =>{
//         console.log(Number(num1)+ Number(num2));

//     }

// }
// calculator.read();
// calculator.add();



// let ladder = {
//     step: 5,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//     }
//   };

//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep();
//  ladder.up();
//  ladder.showStep();

// sayHi();

// let Employee=function(name){
//     this.name=name;
//     this.isAvailable =false;

// }
//  let employeeNik= function{
//      this.name=
//  }

function Calculator() {
    this.num1=0;
    this.num2=0;
    this.read = function()
    {
        this.num1 = parseInt(prompt('enter first number'));
        this.num2=parseInt(prompt('enter secound number'));
    };
    this.sum = function(){
        let addition=this.num1+this.num2
        console.log('addition'+ addition);

    };

    this.mul= function(){
        let multiply=this.num1*this.num2
        console.log('multiplication'+ multiply);
    };5

}
let Calculator1=new Calculator();
Calculator1.read();
Calculator1.sum();
Calculator1.mul();