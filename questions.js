//Q1:add two numbers
function add(a,b){
return a+b;
}
console.log(add(3,5));
//Q2:multiply two numbers
function multiply(a,b){
    return a*b;
}
console.log(multiply(3,9));
//Q3:double a number
function double(z){
return 2*z;
}
console.log(double(8))
//Q4:divide a number by a number
function divide(n,x){
    return n/x;
}
console.log(divide(6,3));
//Q5:convert minutes into seconds
function convert(x){
    return  x*60;
}
console.log(convert(5));
//Q6:Return the Next Number from the Integer Passed
function nextNum(sum){
    return 1+sum
}
console.log(nextNum(19));
//Q7:Convert Age to Days
function calcAge(Age){
    return 365*Age;
}
console.log(calcAge(10));
//Q8:buggy code
/*function cubes(a) {
	retunr a ** 3
}*/ 
//Q9:Return the First Element in an Array
function arr(n){
    return n[0];
}
console.log(arr([8,3,5]));
//Q10:Power Calculator
 function power(v,c){
    return v*c
 }
console.log(power(230,10));
//Q11:converts hour into second
function howManySeconds(b){
    return 3600*b
}
console.log(howManySeconds(2));
//Q12:Find the Perimeter of a Rectangle
function rectangle(a,b){
  return (a+b)*2;
}
console.log(rectangle(2,7));
//Q13:Return Something to Me!
function giveMeSomething(a){
    let x="something"+" "+a;
    return x;
}
console.log(giveMeSomething("junaid"));
//Q14:Is the Number Less than or Equal to Zero?
function check(n){
    if(n>0){
       return false;
    }
    return true;
}
console.log(check(-3));
//Q15:Pair Management
function makePair(a,b){
     return [a,b]
}
console.log(makePair(9,3));

//Q16: Return the Last Element in an Array
function getLastItem(arr){
    return arr[arr.length-1];
}
console.log(getLastItem(["Mac","Book","M2"]));
//Q17:Print 10 multiples of n
function table(n){
    for(let i= 1; i<=10 ; i++){
        console.log(n*i);
    }
}

//Q18:Print even numbers from 2 to 20
function print(){
    for(let i = 2 ; i<=20; i+=2){
        console.log(i)
    }
}

//Q19:Print numbers 10 to 1
function downnum(){
for(let i=10;i>=1 ; i--){
console.log(i);
}
}
//Q20:Find an element in an array and its index
function find(num,target){
    for(let i=0;i<num.length;i++){
        if(num[i]==target){
            return i
        }
    }
    return -1; 
}
//Q21:Find minimum number in an Array
function minimum(arr) {
    let min = Infinity; 
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
           min=arr[i];
        }
    }
    return min;
}
console.log(minimum([8,5,3,7,6,1]));
//Q22:Filter an array by a given typeof data
function filter(arr,data){
    let x = [];
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]===data){
        x.push(arr[i]);
    }
}
return x;
}
console.log(["go",3,5,true,false],"boolean");
//Q23:Count odd numbers in an array
function odd(arr){
   let x = 0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        x++;
    }
   }
   return x;

}
console.log(odd([1,2,3,4,5]));
//Q24:Check if given array is special or not
function special(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0&&i%2==0){
            return true
        }else if(arr[i]%2!==0&&i%2!==0){
            return true
        }
    }
    return false
}
console.log(special([0,1,2,3,4,5]));
//Q25:Count vowels in a String
function vowelCounter(str){
    let strL=str.toLowerCase();
    let counter=0;
    for(let i=0;i<strL.length;i++){
        if(strL[i]=="a"||strL[i]=="e"||strL[i]=="i"|| strL[i]=="o"|| strL[i]=="u"){
            counter++;
        } 
    }
    return counter
}
console.log(vowelCounter("CelEbratIons"));