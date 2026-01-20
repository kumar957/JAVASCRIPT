/* // let student1marks =22;
// let student1maxmarks =100;

function calgrade(studentmarks,studentmaxmarks){
    let studentpercentage =(studentmarks/studentmaxmarks)*100;
    let studentGrade;

    if(studentpercentage >=90)
    {
        studentGrade ='A';
    }
    else if (studentpercentage >=80)
    {
        studentGrade ='B';
    }
    else if (studentpercentage >=70)
    {
        studentGrade ='C';
    }
    else if (studentpercentage >=60)
    {
        studentGrade ='D';
    }
    else if (studentpercentage >=50)
    {
        studentGrade ='E';
    }
    else
    {
        studentGrade ='Fail The Exam';
    }

    console.log(studentGrade)
}
calgrade(77,100)
calgrade(90,100)
calgrade(53,100)


 */
// Arrow functions...
/* let add=(a,b)=>{
    return a+b;

}
console.log(add(44,63));

let sub=(a,b)=>a+b;
console.log(sub(90,30)); */

//Another Tye of function..
// IIFE- Immediately Invoked Function Expression..

/* exmp();
function exmp(){
    console.log("This is IIFE function");
}
 */

// Immediately Executed Function Expression
(function(){
    console.log("I Run When Immidiately");
});



//Generator Function...
// console.log(a);
// var a=100;  // The print a value is Undefined Because of Hoistig.

//Hoisting Example

console.log(a);  
var a=44;
console.log(a);  // Only Var is Hoisted show Undefined.. Let and Const not Hoisted..

// var is initialized with undefined.
// let and const are not initialized.