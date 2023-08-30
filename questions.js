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
//Q20:Find an index of a given element in an array                       imp
function find(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
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
//Q22:Filter  eliments of an array by a given typeof data
function filter(arr,data){
    let x = [];
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]===data){
        x.push(arr[i]);
    }
}
return x;
}
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
//Q26:find maximum number in an Array
function maximum(arr){
     max=-Infinity;
     for(let i = 0 ; i < arr.length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
     } return max
}
//Q27:Count length of given Number
function numCounter(number){
    let counter=0;
    let numberS= number.toString();
     for(let i = 0; i<numberS.length;i++){
        counter++;
     }
     return counter
}
console.log(numCounter(365));
//Q28:Count how many elements in an array are even
function evenCounter(arr){
    let counter=0;
    for(let i = 0;i<arr.length;i++)
    if(arr[i]%2==0){
        counter++
    }
    return counter
}
console.log(evenCounter([8,2,4,5,1]));
//Q29:Check if array is in ascending order
function ascending(arr){
    for(let i = 0; i<arr.length;i++){
       if(arr[i]<=arr[i+1]){
        return true;
       }else{
        return false;
       }
    } 
}
console.log(ascending([4,5,6]));
//Q30:Check values type of element in a given array
function valuesType(arr){
    let x=[]
for(let i=0;i<arr.length;i++){
    x.push(typeof arr[i]);
}
    return x
}
//Q31:Get sum of all elements in a given array
function getSum(element){
      sum=0;
      for(let i=0;i<element.length;i++){
           sum=sum+element[i]
      }return sum
}
console.log(getSum([8,2,5]));
//Q32:Find Index of given target in an array
function indexFinder(arr,target){
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return "There is No Such Type of Element!";
}
console.log(indexFinder([1,3,"hello"],3));
//Q33:Find length of given words in an array
function lengthFinder(arr){
    let result=[];
    for(let i = 0;i<arr.length; i++){
        result.push(arr[i].length);
    }
    return result;
}
console.log(lengthFinder(["Hello","going","Bye"]));
//Q34:Create a function that takes an array of strings and returns the words that are exactly four letters.
function fourLetters(str){
     let fourWords=[];
     for(let i=0; i<str.length;i++){
        if(str[i].length==4){
            fourWords.push(str[i]);
        }
     }
     return fourWords;
}
console.log(fourLetters(["Lock","Potato","Doge"]));
//Q35:Create a positive number counter and a negative number counter
function pnCounter(arr){
let PosCounter = 0;
let negCounter =0;
for(let i = 0; i<arr.length;i++){
    if(arr[i]>0){
        PosCounter++
    }else if(arr [i]<0){
        negCounter++
    }
}
return Array(PosCounter,negCounter);
}
console.log(pnCounter([-9,1,3,-5,-3,-6]));
//Q36:Find the product(multiplication) of given elements in an array
function product(arr){
   let productM= 1;
   for(let i = 0; i<arr.length; i++){
    productM=productM*arr[i];
   }
return productM
}
console.log(product([4,5]));
//Q37:Find the boolean value by given numbers in string
function booleanChecker(str){
    let result= [];
    for(let i = 0 ; i < str.length;i++){
        if(str [i]==1){
        result.push(true);
    }else if(str [i]==0){
        result.push(false);
    }
}
return result
}
console.log(booleanChecker("101"));
//Q38:Forbidden Letter
function forbiddenLetter(arr,Letter){
    for(let i = 0 ; i<arr.length ; i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]===Letter){
                return false
            }
        }
    } 
    return true
}
console.log(forbiddenLetter(["Jaipur","Rajasthan","India"],"x"));
//Q39:Return words from given string that are on odd index
  function oddIndex(arr){
    let result=[];
    for(let i = 0; i<arr.length; i++){
        if(i%2!==0){
            result.push(arr[i]);
        }
    }return result;
  }
  console.log(oddIndex("Junaid"));
  //Q40:Check if the array is in descending order
  function descending(arr){
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return true
        }

    } return false
  }
console.log(descending([6,5,4,3,2,1]));
//Q41:Count how many capital letters are in the given string
function capital(str){
    let up=str.toUpperCase();
    let counter=0;
    for(let i = 0; i<str.length; i++){
        if (str[i]==up[i]) {
            counter++
        }

    } return counter

}
console.log(capital("hJlL"));
//Q42:Return sum of even numbers between a given range
 function sumEvenRange(start,stop){
    let sum=0;
    for(let i=start;i<=stop;i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    return sum
}
console.log(sumEvenRange(10,20));
//Q43:Find sum of all elements in a nested array
function nestedSum(arr){
    let sum=0;
    for(let i = 0 ; i<arr.length;i++){
         for(let j = 0; j<arr[i].length;j++){
              sum=sum+arr[i][j];
         }
    }
return sum
}
console.log(nestedSum([[1,2,3],[4,5,6],[7,8,9]]));