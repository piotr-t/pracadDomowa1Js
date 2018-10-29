
const ARRAY=[1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

//1) Create a function that returns the sum of all elements passed in array as parameter.
//2) Create a function that returns sum of first and last elements of given array.
//3) Create a function that takes a number and return factorial of that number.
//4) Create a function that returns given array in reverse order. // no build in functions  
function createRev(arr) {
    let ar2=[];
    for (let b = arr.length; b>=0 ; b--) {
        ar2.push(arr[b]);  
    }
  console.log('new reverse array is:'+ar2);  
}
createRev(ARRAY)
//5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,d] -> [a+b, c+d, e+d]
//6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
//7) Create a function the return one random element from given array. // use random function 
//8) Create a function that takes two parameters array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
//9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
//10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random.  And return a result. [a,b,c,d] => (((a+-b)+-c)+-d)
//11) Create a function that will return the current day name in Polish. 
function dayPol() {
    let datePol=(new Date()).getDay();
    let dayPol;
    switch (datePol) {
        case 0:dayPol='Niedziela'
            break;
        case 1:dayPol='Poniedziałek'
            break;
        case 2:dayPol='Wtorek'
            break;
        case 3:dayPol='środa'
            break;
        case 4:dayPol='Czwartek'
            break;
        case 5:dayPol='Piątek'
            break; 
        case 6:dayPol='Sobota'
            break;
    }
    console.log("We have: "+dayPol);
}
dayPol();

//12) Create a function that tells us how many days till Friday 

//13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
//14) Create a function that takes array of objects given below and calls ‘show’ function if one is present on object.
let objects = [{
    id:1,
    show: function(){
        console.log('first show');
    }
},{
    id:2
},{
    id:3,
    show: function(){
        console.log('third show');
    }
}];

function isShow(obj) {
for (let c = 0; c < obj.length; c++) {
    if(obj[c].show){obj[c].show();}
    
}
}
isShow(objects);
