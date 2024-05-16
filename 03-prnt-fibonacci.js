/*fibonacci series defination : we have to write a sequence number on that number the first two number are added the third number is displayed, the first two number starts with 0 and 1.  
0 1 1 2 3 5 8 13 21 34*/
let num1=0;
let num2=1;
let num3;
let count=10;
console.log(num1);
console.log(num2);
for (let i = 2; i < count; i++) {
    num3=num1+num2;
    console.log(num3);
    num1=num2;
    num2=num3;

    
}