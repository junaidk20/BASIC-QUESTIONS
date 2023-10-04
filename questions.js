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
function FirstElm(n) {
    return n[0]
    
}console.log(FirstElm([1,3,4]));
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
function name(b) {
    x="something"+" "+b
   return x    
}console.log(name());
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
function table(n) {
    for(let i=1;i<=10;i++){
     result.push(i*num)
    }return result
    
}console.log(table(4,4));
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
downnum()
//Q20:Find an index of a given element in an array
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
console.log(filter([1,'junaid',true],'string'));
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
        if(arr[i]%2==0&&i%2!==0){
            return false
        }else if(arr[i]%2!==0&&i%2==0){
            return false
        }
    }
    return true
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
//Q29:Check if array is in ascending order
function ascending(arr){
    for(let i = 0; i<arr.length;i++){
       if(arr[i-1]<=arr[i]){
        return true;
       }else{
        return false;
       }
    } 
}
console.log(ascending([4,5,6]));
//Q30:return values type of element in a given array f
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
  function descendingChecker(arr) {
    for(let i=1;i<arr.length;i++){
         if (arr[i]<=arr[i-1]) {
            return true
         }
    }return false
    
  }console.log(descendingChecker([2,3,5,7,8]));
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
console.log(capital("hJlL"))
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
//Q44:Return even elements in a nested array
function evenNested(arr){
    let result=[];
    for(let i= 0; i<arr.length; i++){
        for(let j = 0;j<arr[i].length;j++){
           if(arr[i][j]%2==0)
              result.push(arr[i][j])         
        }
    }return result
}
console.log(evenNested([[1,2,3],[4,5,6],[7,8,9]]));

//Q45:Remove Duplicates from an array 
function removeDuplicates(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j);
            }
        }
    }
    return arr;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 2, 3, 4, 1, 10, 5,1]));
//Q46:Return the last element of all arrays in a nested array
function lastArray(arr){
    let result=[];
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[i];j++)
        if(arr[i].length-1==j){
            result.push(arr[i][j])
        }
    }return result
}
console.log(lastArray([[1,2,3],[4,5,6],[7,8,9]]));
//Q47:Count how many numbers in a nested array are same as the number that is given in argument 
function sameNumber(arr,n){
    let counter=0;
    for(let i =0; i<arr.length;i++)
    for(let j=0;j<arr[i].length;j++){
      if (arr[i][j]==n) {
          counter++
        }
    }
return counter
}
console.log(sameNumber([[1,2,3],[4,1,6],[7,8,1]],1));
//Q48:Check if sum of any 2 elements in array is equal to target or 2Sum
function twoSum(arr,target){
  for(let i=0; i<arr.length;i++){
    for(let j=0+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
           return true
        }
    }

  }return false
}
console.log(twoSum([9,2,7,4],6));
//Q49:Find largest even number in an array
function largestEvenNum(arr) {
   let max = -Infinity
    for(let i=0 ; i<arr.length; i++){
        if(max<arr[i]&&arr[i]%2==0){
            max=arr[i]
        }
    }
    return max 
}console.log(largestEvenNum([9,3,2,6,8,2]));
//Q50 find minimum number in nested array
function findMinimumNested(arr) {
   let smallest=[];
   for(let i=0;i<arr.length;i++){
    let min=Infinity;
    for(let j=0;j<arr[i].length;j++){
        if (min>arr[i][j]) {
            min=arr[i][j]
        }
    }
    smallest.push(min);
   }
   return smallest;
}
console.log(findMinimumNested([[1,2,3],[4,5,6],[7,8,9]]));

// Q51:Remove the letters A,B&C from a string 
function removeABC(str) {
    let lStr = str.toLowerCase().split(" ");
    for (let i = 0; i < lStr.length; i++) {
        for (let j = 0; j < lStr[i].length; j++) {
            if (lStr[i][j] === "a" || lStr[i][j] === "b" || lStr[i][j] === "c") {
                lStr[i] = lStr[i].replace(lStr[i][j], "");
            }
        }
    }
    return lStr.join(" ");
}
console.log(removeABC("This might be a bit hard"));
//Q52:Find the second Largest Number 
function sLargest(a) {
    let largest =-1;
    let sLargest = -Infinity;3
    for (let i = 0; i < a.length; i++) {
        if (largest < a[i]) {
            sLargest = largest;
            largest = a[i];
        } else if (largest > a[i] && a[i] > sLargest) {
            sLargest = a[i];
        }
    }
    return sLargest;
}
console.log(sLargest([1, 3, 2, 6, 5]));
//Q53:Find the largest word in a string imp
function largestWord(str){
    let arr=str.split(" ")
    let largest=-Infinity//20;
    let result;
   for(let i=0;i<arr.length;i++){
    if (largest<arr[i].length) {
        largest=arr[i].length;
        result=arr[i];
    }
   }
   return result;
}console.log(largestWord("I am Learning khanumarfarukindia JavaScript"));
//Q54:Find an element that has appeared only once. imp
function elmOnce(arr) {
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        for (let j = i+1; j < arr.length; j++) {
            if ( arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(elmOnce([1, 1, 2, 3, 3, 4, 10, 4, 5, 5]));
//Q55:Reverse an array  
function reverseArr(arr){
    let result=[];
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result
}
console.log(reverseArr(["Junaid","Khan",21]));
//.56 return the sum of two numbers.
function sumOfTwoNum(a,b) {
    return a+b
}
console.log(sumOfTwoNum(3,5) );
//.57 convert minutes into sec.
function convertMinToSec(m) {
    return 60*m
}
console.log(convertMinToSec(2));
//.58 return next num to the passed integer.
function nextInteger(n) {
    return n+1
}
console.log(nextInteger(8));
//.59 return Area of triangle.
function triangleArea(b,h) {
    return (b*h)/2
}
console.log(triangleArea(2,6));
//.60 convert age to days;
function ageConverter(age) {
     return age*365
}
console.log(ageConverter(1));
//.61 buggy code (part 1)
function buggyPart1(n) {
 return n*n*n    
}
console.log(buggyPart1(3));
//.62 return the first eliment in arr
function firstEliment(arr) {
  return arr[0]    
}console.log(firstEliment([9,8,6,6]));
//.63 return power calculater.
function powerCal(a,b) {
    return a*b    
}
console.log(powerCal(2,3));
//.64 convert hour into seconds
function convertHrs(h) {
    return h*3600
}
console.log(convertHrs(2));
//.65 maximum edge of triangle  imp
function third(side1,side2) {
    return (side1+side2)-1
}
console.log(third(3,4));
//.66 remainder of two numbers imp
function sameRemainder(a,b) {
    return a%b
}
console.log(sameRemainder(3,6));
//.66 find the perimeter of a rectangle
function rectanglePerimeter(a,b) {
    return (2*a)+(2*b)
}
console.log(rectanglePerimeter(6,7));
//.67 return something to me
function returnSomething(a) {
 let x=("something"+" "+a)
 return x
}
console.log(returnSomething("junaid"));
//.68 correct the mistakes
function correctTheMistakes(n) {
    return n*n    
}
console.log(correctTheMistakes(5));
//.69 is the number less than or equal to zero.
function numCheck(n) {
    if (n<=0) {
        return "true" 
    }return "false"
}
console.log(numCheck(-1));
//.70 sum of polygon 
function polygonSum(n) {
   let sum=((n-2)*180)
    return sum
}
console.log(polygonSum(4));
//.71  concanate the variables
function concanateVar(n) {    
    return n.concat("Edabit") 
}
console.log(concanateVar("junaid"));
//.72 less than 100
function lesserThan(a,b) {
    if (a+b<=100) {
        return "false"
    }return "true"
}
console.log(lesserThan(82+1));
//.73 buggy code part 5
function print(n) {
    let result=[]
    for(let i = 1;i<=n;i++){
        result.push(i)
    }return result
}
console.log(print([7]));
//.74 buggy code part 7  
function swap(a,b) {
    return [b,a]
}
console.log(100,200);
//.75 animal legs Counter
function legCounter(chicken,cows,pigs) {
    let x=2*chicken;
    let y=4*cows;
    let z=4*pigs;
    return [x,y,z]
}
console.log(legCounter(9,3,6));
//.76 using the && operator
function useAnd(a,b) {
    if (a>0&&b>0) {
        return "true"
    }return "false"
}
console.log(useAnd(2,4));
//.77 are the numbers equal
 function matchNum(a,b) {
    if (a==b) {
        return "true"
    }return "false"
 }
 console.log(matchNum(1,1));
//.78 football points
function footballPoints(wins,draws,losses) {
   let x=3*wins
    let y=1*draws
    let z=0*losses
return x+y+z
}
console.log(footballPoints(3,4,2));
//.79 convert hours and minutes into seconds
function converter(hours,minutes) {
    let x=3600*hours;
    let y=60*minutes;
    return (x+y)
}
console.log(converter(1,3));
//.80 fix the expression
function fix(x) {
    if (x==7) {
        return "true"
    }return"false"
}console.log(fix(7));
//.81 equality check
function equalityChecker(a,b) {
    if (a==b) {
        return "true"
    }
    return "false"
}
console.log(equalityChecker(1,1));
//.82 profitable gambling
function gambling(prob,prize,pay) {
    if (prob*prize>pay) {
        return "true"
    }
    return "false"
}
console.log(gambling(0.9,3,2));
//.83 boolean to string
function booleanConverter(b) {
   let flag=b.toString()
   return flag 
}console.log(booleanConverter(true));
//.84 using arrow function. incom
//.85 frames per sec. imp
function frames(a,b) {
    x=a*b*60
    return x
}
console.log(frames(10,25));
//.86 miserable parody of calculator. incom
function calculator(str) {
    return eval(str)
}console.log(calculator("23+4"));
//.87 buggy code part 4
function greeting(s) {
   let result;
    if (s=="matt") {
        result="hello,matt"
    }else if (s=="mubashir") {
        result="hello, my love!"
    }else if(s=="helen"){
        result="hello, halen!"
    }return result
}console.log(greeting("matt"));
//.88 two makes ten
function makeTen(a,b){
    if (a+b==10||a==10||b==10) {
        return "true"
    }return "false"
}
console.log(makeTen(1,9));
//.89 let`s fuel up!
function calculateFuel(d) {
    if (d*10<100) {
      return 100
    }return d*10
}
console.log(calculateFuel(3));
//.90 buggy code part 2
function maxNum2(a,b) {
    if (a>b) {
        return a
    }else if (b>a) {
        return b
    }
    return a,b
}
console.log(maxNum2(10,12));
//.91 pair Managment
function makePair2(a,b) {
    return [a,b]    
}
console.log(makePair2(3,5));
//.92 compare string by count of character. imp
function comp(str1,str2) {
   if (str1.length === str2.length) {
     return "true"
   } 
   return "false"
}
console.log(comp("abc","hsg"));
//.93 is the string empty?
function isEmpty(s) {
    if (s==("")) {
        return "true"
    }else if (s==(" ")) {
        return "false"
    }return "false"
    
}
console.log(isEmpty("b"));
//.94 check if an integer is divisible by five
function divisibleByFive(n) {
    if (n%5==0) {
      return "true"
    }
   return "false"
}
console.log(divisibleByFive(37));
//.95 check if an integer is divisible by 100
function dividible(n) {
    if (n%100==0) {
        return "true"
    }
    return "false"
}
console.log(dividible(100));
//.96 recursion length of a string
function length1(str) {
    return str.length
    
}console.log(length1("apple"));
//.97 divides evenly
function dividesEvenly(a,b) {
    if (a%b==0 && a>=b) {
        return "true"
    }
    return "false"
}
console.log(dividesEvenly(85,4));
//.98 return a string as an integer. 
function stringInt(str) {
    return Number(str)
}
console.log(stringInt("9"));
//.99 area of rectangle 
function area(l,b) {
    if (l*b) {
        return "true"
    }
    return -1
}
console.log(area(-1,11));
//.100 tips
//.101 concanate first and last name 
function concatName(a,b) {
    let x = b.concat(a)
    let y = x.toString()
     return y
}console.log(concatName("junaid","khan"));
//. 102 buggy code
function has_bugs(a) {
    if (a==true) {
        return "sad days"
    }else if (a==false) {
        
    }
    return "its a good day"
}
console.log(has_bugs(false));
//.103 evaluate an equation . imp
function eq(str) {
    return eval(str)
}
console.log(eq("3+2-4"));
//.104 solve the equation.  imp
function equation(str) {
    return eval(str)
}
console.log(equation("6+8"));
//.105 learn lodash drop the first eliment of arr  incomp
function drop(arr,n){
    return arr.slice(n)
}console.log(drop([1,2,3],0));
//.106 upvotes and down votes  imp
function getvoteCount(votes) {
    let x= votes.downvotes;
    let y=votes.upvotes;
    return x-y
}
console.log(getvoteCount({upvotes: 13, downvotes: 0}));
//.107 return negative
function returnNegative(n) {
   let x=n-n-n
    return x
}
console.log(returnNegative(4));
//.108 reverse an array
 function reverse(arr) {
   let result=[]
    for(let i=arr.length-1;i>=0;i--){
          result.push(i)
    }
    return result
 }
 console.log(reverse([1,2,3,4,5]));
 //.109 movie Theatre Admittance  imp
 function acceptIntoMovies(age,isSupervised) {
    let result=false
    if (age<15 && isSupervised==true) {
        result=true
    }else if (isSupervised==false&&age>=15||isSupervised==true) {
        result=true
    }
    return result
 }console.log(acceptIntoMovies(12,false));
 //.110 simple array manipulation  imp
 function incrementItem(arr) {
   let result=[]
    for(let i=0;i<arr.length;i++){
        result.push(arr[i]+1)
    }return result
 }console.log(incrementItem([1,2,3,4]));
 //.111 drinks allowed?
  function serveDrink(age,b){
    if (age>=18&&b==true) {
        return false
    }else if (b==false&&age<18) {
        return false
    }else if (age>=18&&b==false) {
        return  true
    }
return false
  }
console.log(serveDrink(19,true));
//.112 century crisis
function futurePeople(p,n){
    return p+(n*360)
}console.log(futurePeople(256,2));
//.113 template string
function templateString() {
    let a= "john";
    let b = "joe";
    let c = "jack";
    console.log(`hello,my name is ${a}`);
}  
templateString()
//.114 arrow function
//.116 minimal if else
function minimal(n) {
    if(n>0)return "positive"
    if(n<0)return "negative"
    return "equal"
}
console.log(minimal(8));
//.117 is the string odd or even
function oddOrEven(str) {
    if (str.length%2==0) return true
    if(str.length%2!==0) return false
}console.log(oddOrEven("junai"));
//.119 inches to feet   incomp
function inchesToFeet(inch){
    return inch/12
}console.log(inchesToFeet(324));
//.120 I'd like a new shade of blue,please
function howManyWalls(n,w,h){
    if(w*h>=n){
        return 0
    }else{
        return 100/(w*h)
    }
}console.log(howManyWalls(100,4,5));
//.121 to the power of
function calculateExponent(b,e){
    return b**e
}console.log(calculateExponent(5,5));
//.122 return the last eliment of array imp
function LastElm2(arr) {
    return arr[arr.length-1]
}
console.log(LastElm2([1,2,3,4]));
//.123 string and number conversions
function tostring(num) {
    return num.toString()
}
console.log(tostring(95));
    function StringToNum(str){ 
    return Number(str)
    }
    console.log(StringToNum("4"));
//.124 on/off switches incomp
//.125 among us Imposter formula
 function imposterFormula(i,p) {
    return 100*(i/p)
 }
 console.log(imposterFormula(1,10));
 //.126 find the leap year
 function leapYear(year) {
    if(year%4==0) return "true"
    if(year%4!==0)return "false"
 }console.log(leapYear(1968));
//.127 word without first character   incomp
function newWord(str){
    let arr=str.split("")
    arr.splice(0,1)
    return arr.join("")
}console.log(newWord("apple"));
//.128 flip the boolean
function flipBool(b) {
    if(b==true) return 0
    if(b==false) return 1
    if (b==1) return 0
    if(b==0) return 1    
}
console.log(flipBool(0));
//.129 name greeting
function helloName(n) {
    let x="hello"
    let y=(x+" "+n)
    return y
}console.log(helloName("junaid"));
  //.130 is the number even or odd
  function isEvenOrOdd(n) {
    if(n%2==0) return "even"
    if(n%2!==0)return "odd"
  }      
  console.log(isEvenOrOdd(2));
  //.131 check whether a given number is odd
  function isOdd(n) {
    if(n%2!==0) return true
    if(n%2==0) return false
  }
  console.log(isOdd(0));
  //.132 stack the boxes
  function stackBoxes(n) {
    if(n>=0&&n<=1) return n
    if(n>1) return n+n
    
  }
    console.log(stackBoxes(2));
//.133 triangle and parallelogram are finder
function areashape(b,h,shape) {
    if(shape=="triangle") return (0.5 * b * h)
    if (shape=="parallogram") return (b * h)
}
console.log(areashape(8,6,"parallogram"));
//.134 convert an array to a string
function arrayTostring(arr) {
    return arr.toString()
}
console.log(arrayTostring([1,2,3,4,5,6,]));
//.135 concatenating Two Integer Array
function concatenating(a,b) {
    return a.concat(b)
}
console.log(concatenating([1,2,3,4,5,6],[7,8,9]));
//.136 find the index
function findIndex(arr,str) {
    let result=[];
    for(let i=0;i<arr.length;i++){
        if (arr[i]==str) {
           result.push(i)
        }
    }
    return result
}
console.log(findIndex(["hi","edabit","fgh","abc"],"fgh"));
//.137 array indexing
function valueAt(arr,n){
    let index=Math.floor(n)
    return arr[index]
}console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));
//.138 find the index part 1.
function search(arr,n) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]==n) {
            return i
        }
    }
    return -1
}
console.log(search([1,2,3,4,5],2));
//.139 buggy code
function sumArray(arr) {
   let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
     return sum
}
console.log(sumArray([1,2,3,4,5]));
//.140 find the index
function search1(arr,n){
    for(let i=0;i<arr.length;i++){
       if (arr[i]==n) {
        return i
       }
    }
    return -1
}
console.log(search([1,2,3,4,5,6],6));
//.142 word Numbers!
function word(str) {
    if(str=="one") return 1
    if(str=="two") return 2
    if(str=="three") return 3
    if(str=="four") return 4
    if(str=="five") return 5
    if(str=="six") return 6
    if(str=="seven") return 7
    if(str=="eight") return 8
    if(str=="nine") return 9
    if(str=="ten") return 10
}
console.log(word("ten"));
//.143 check if array contains a given number
function check2(arr,n) {
   let result=""
    for(let i= 0;i<arr.length;i++){
        if (arr[i]==n) {
           return true
        }
    }
    return false
    
}console.log(check2([1,2,3,4,5,6,7,8],5));
//.144 minimal bool .comp
//.145 number of stikers
function howManystickers(n) {
    return n*n*6
}
console.log(howManystickers(3));
//.146 burglary series(19):Prevent changes incomp
//.147 check string for spaces  imp
function hasSpaces(str) {
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
            return true
        }
    }
    return false
}console.log(hasSpaces("hello, world"));
//.148 kinetic energy    imp
function kineticEnergy(m,v){
    let kinetic=(m*v*v)/2
    return kinetic
}console.log(kineticEnergy(45,10));
//.149 volume of a box      imp
//. 150 recreating abs() function
function absolute(n){
    return Math.abs(n)
}
console.log(absolute(-122));
//.151 is the last character "n" incomp
function isLastCharacterN(str) {
    if (str[str.length-1]=="n") {
        return true
    }
    return false
}
console.log(isLastCharacterN("khan"));
//.152 less than greater than
function arrbetween(num1,num2,arr) {
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>num1&&arr[i]<num2) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(arrbetween(3,8,[1,5,95,0,4,7]));
//153. 50-30-20 strategy incomp
//154. count the argument incomp
//155.find the bug: returning the container
function getContainer(c) {
    if(c=="bread") return "bag"
    if(c=="beer") return "bottle"
    if(c=="candy") return "plastic"
    if(c=="cheese") return "null"
}console.log(getContainer("candy"));
//.156 .many operators 
function operate(num1,num2,operator) {
     if(operator=="+") return num1+num2
     if(operator=="-") return num1-num2
     if(operator=="%") return num1%num2
    
}console.log(operate(20,10,"%"));
//.157. has same breads. imp+
function hasSameBreads(a,b) {
    if(a[0]==b[0]&&a[a.length-1]==b[b.length-1]&&a[0]==a[a.length-1]&&b[0]==b[b.length-1]&&a[0]==b[b.length-1]&&b[0]==a[a.length-1]){
        return true
    }
    return false
} 
console.log(hasSameBreads(["white brea","lettuce","white bread"],["white bread","tomato","white bread"]));
//.158. nth star number incomp
//159 return the total number of paramenter incomp
//.160 
function relationToLuke(str) {
    if(str=="Darth Vadar") return "luke iam your father"
    if(str=="leila") return "luke iam your sister"
    if(str=="Han") return "luke iam your brother in law"
    if(str=="R2D2") return "luke iam your droid"
}
console.log(relationToLuke("Darth Vadar"));
//.161 convert all aray items in string
function parseArray(arr) {
   let x= arr.toString()
   return [x]
}
console.log(parseArray([1,2,"a","b"]));
//.162 front 3- slice check repeat concanate incomp
function frontThree(str) {
    for(let i=0; i<str.length;i++){
       if (str[i].length>3) {
           
       }
    }
        
    }
//.163 extract city facts incomp
function cityFacts() {
    console.log();
}
//.164 return types
function arrayValueType(arr) {
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(typeof arr[i])

    }return result
    
}
console.log(arrayValueType([1,""]));
//.165 array of string and array of numbers incomp
     function toNumberArray(arr) {
        let x=parseFloat(arr)
        return [x]
     }
     console.log(toNumberArray(["1","2","6"]));
//.166 is the word singular or plural?
  function isPlural(a) {
    if(a[a.length-1]=="s") return true
    if(a[a.length-1]!=="s") return false
    
  }
  console.log(isPlural("chenges"));
  //.167 Concanating first and last Characters of a string
  function firstLast(str) {
   let x= str[0].concat(str[str.length-1])
    return x
  }
  console.log(firstLast("junaid"));
  //.168 slice of pie   incomp
function equalSlices(ts,nr,se) {
    if(ts>nr&&ts>se&&nr>se){
      return true
    }
        return false
    }
    
console.log(equalSlices(11,5,3));
//.169 function stuttring incomp 
function stuttring() {
    
}
//.170 destructive array incomp 
function vari(arr) {
    
}
//.171 fraction is greater than 1
function graeaterThanOne(fraction) {
    if(fraction>1){ 
        return true
    }else if (fraction<1) {
        return false
    }
    return false
    
}console.log(graeaterThanOne(7/4));
//.172 default mood 
function moodToday(str) {
    if(str=="happy") return "today iam feeling happy"
    if(str=="sad") return "today iam feeling sad"
    if(str=="") return "today iam feeling neutral"
    
}
console.log(moodToday("sad"));
//.173 reverse psychology
function reversePhycology(str) {
    let x= "do not"+" "+str
if(str=="") return "do not do anything"
    return x
    
}console.log(reversePhycology(""));
//.174 destructing Assignment incomp
function writeYourCode(elm) {
arr=[1,2,3,4,5,6,7,8,9]
first=arr[0]
second=arr[1]
three=arr[2]
four=arr[3]
other= other.splice(3)
}
//.175 repeat string incomp
//.176 does a number exist? incomp
//.177 count the syllabus incomp
//.178 squares and cubes incomp
//.179 circle or square incomp
//.180 char-to-ASC||