//print from 1to10
   console.log( "print from 1to10")
for(let i=1;i<=10;i++){ 
    console.log(i);
}

//     Print numbers from 10 to 1 (reverse order)
console.log(" Print numbers from 10 to 1 (reverse order)" )
for(let i=10;i>=1;i--){
    console.log(i);
}

// Print even numbers between 1 and 20
console.log("Print even numbers between 1 and 20" )
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
    
}

// Print odd numbers between 1 and 20
// 
 console.log("Print odd numbers between 1 and 20." )
for(let i=1;i<=20;i++){
    
    if(i%2!=0){
         
        console.log(i)
    }
}

//Print the multiplication table of 5.
console.log("Print the multiplication table of 5.");
let n=5;
for(let i=1;i<=10;i++){
    console.log(i+ "x "+n+ "=" +i*n)
}

//Print all elements of an array.
console.log("Print all elements of an array.");
let arr = [1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//Find the sum of numbers from 1 to 50.
console.log("Find the sum of numbers from 1 to 50.");
let sum=0;
for(let i=1;i<=50;i++){
    sum +=i;
 }
 console.log(sum);

 //Print array elements in reverse order.
 console.log("Print array elements in reverse order.");
 let revarr=[1,2,3,4,5];
 for(let i=revarr.length ;i>=0;i--){
   let reversearray=revarr[i];
    console.log(reversearray);
 }
 
 //Count how many even and odd numbers are in an array.
 console.log("Count how many even and odd numbers are in an array.");
 let numbers =[1,2,3,4,5,6,7,8,9,10];
 let even=0;
 let odd=0;
 for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
       even++
    }else{
        odd++
    }
    
 }
  console.log("even count :"+even )
   console.log("odd count :"+odd )



   //Find the maximum number in an array.
   console.log("Find the maximum number in an array.")
   let maxnumarray =[1,2,3,4,5]
    let maxnum=maxnumarray[0];
    for(let i=0;i<maxnumarray.length;i++){
            if(maxnum<maxnumarray[i]){
                maxnum=maxnumarray[i];
               
            }
        }
         
    
      console.log(maxnum)


      //Find the minimum number in an array.
       console.log("Find the minimum number in an array.")
   let minnumarray =[1,2,3,4,5]
   let minnum=minnumarray[0];
    for(let i=0;i<minnumarray.length;i++){
                  if(minnum>minnumarray[i]){
                minnum =minnumarray[i];
               
            }
        }
         

      console.log(minnum)

//Calculate the product of all numbers in an array.
console.log("Calculate the product of all numbers in an array.")
let nums=[1,2,3,4,5]
product=1;
for(let i=0;i<nums.length;i++){
    product*=nums[i];
}
console.log(product)

//Find the Factorial of a Given Number
console.log("Find the Factorial of a Given Number")
let fact=1;
let num =5;
for(let i=1;i<=num;i++){
    fact *=i;
}
console.log(fact)


//Generate the Fibonacci sequence up to 10 terms.
console.log("Generate the Fibonacci sequence up to 10 terms.")
let a=0;b=1;
for(let i=2;i<=10;i++){
    let c=a+b;
    console.log(c)
    a=b;
    b=c;
    
}


//Reverse a string using a for loop.
console.log("Reverse a string using a for loop.")
let str="swetha";
let revstr="";
for(let i=str.length-1;i>=0;i--){
revstr+=str[i];
}
console.log(revstr)

//Count how many vowels are in a string.
console.log("Count how many vowels are in a string.")
let value="peacock";
let vowel="aeiou";
let vowelcount=0;
for(let i=0;i<value.length;i++){
    for(let j=0;j<vowel.length;j++){
        if(value[i]===vowel[j]){
            vowelcount++;
        }
    }
}
console.log(vowelcount)

//Print a square pattern of * of size 5.

for(let i=0;i<5;i++){
    let row = "";

for(let j=0;j<5;j++){
 row +="* ";
}
console.log(row);

}

//Print a right angle triangle pattern of * .
for(let i=0;i<=5;i++){
    let row="";
    for(let j=0;j<i;j++){
        row +="* "
    }
    console.log(row)
}

//get the index of the target from array
console.log(" get the index of the target from array")
let values = [10, 20, 30, 40, 50];
let target = 30;

  console.log(values.indexOf(target));

//check if a number is prime or not 
console.log("check if a number is prime or not")
let tar=13;
let isPrime=true;
for(let i=2;i<tar;i++){
    if(tar%i===0){
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "prime": "not prime")



