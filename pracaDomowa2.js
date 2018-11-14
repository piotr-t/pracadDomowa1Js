
const ARRAY=[1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

//1) Create a function that returns the sum of all elements passed in array as parameter.

function sumAll(params) {
    let sumA=0;
    params.forEach(element => {
        sumA+=element;
    });
    console.log('1) sum elements is :  '+sumA);
}
sumAll(ARRAY);

//2) Create a function that returns sum of first and last elements of given array.
function firLast(params) {
    let arL= params.length-1;
    let sumFL=params[0]+params[arL];
    console.log('2) Pierwszy element to:  '+params[0]+', ostatni:  '+params[arL]+', a ich suma to:  '+sumFL);
}
firLast(ARRAY);
//3) Create a function that takes a number and return factorial of that number.
function randFaktor(num) {
    let RF=Math.floor(Math.random()*num);
    let rFactoria=1;

        for (let rIndex = 1; rIndex <= RF; rIndex++) {
            if(RF==0){ rFactoria=1}else{
            rFactoria=rFactoria*rIndex;}
            
        }
    console.log('3) losowa liczba to: '+RF+' a jej silnia:  '+rFactoria)
}
randFaktor(10);

//4) Create a function that returns given array in reverse order. // no build in functions  
function createRev(arr) {
    let ar2=[];
    for (let b = arr.length; b>=0 ; b--) {
        ar2.push(arr[b]);  
    }
  console.log('4) new reverse array is:'+ar2);  
}
createRev(ARRAY)
//5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,d] -> [a+b, c+d, e+d]
function addTwo(params) {
    let ar3=[];
    for (let inI = 0; inI < params.length; inI+=2) {
        ar3.push(params[inI]+params[inI+1])  
    }
    console.log('5) '+ar3)
}
addTwo(ARRAY);

//6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
function reLast(params1) {
    let params=params1.slice();//ciekawe [...params1],Array.from(params1)
    params.pop();
    let ost=params[params.length-1]
    params.push(ost);
    let arr5=[];
    for (let Rem = 0; Rem < params.length; Rem+=2) {
        arr5.push(params[Rem]+params[Rem+1])
        
    }
   console.log('6) '+arr5) 
}
reLast(ARRAY)
//7) Create a function the return one random element from given array. // use random function 
function randEl(paramss) {
    let elRand=Math.floor(Math.random()*paramss.length);
    console.log('7) element tablicy: '+elRand+' jego wartość: '+paramss[elRand]+'  '+paramss);
}
randEl(ARRAY);

//8) Create a function that takes two parameters array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
function loElem(param1,param2){
    if (Array.isArray(param1)&&typeof param2==='number'&&param2>0){
        let elRand1=0;
        let wyn=[];
        var wynik=0;
        for (let c = 0;c<param2; c++){
            elRand1=Math.floor(Math.random()*param1.length); 
            wyn.push(param1[elRand1]);
            console.log('8)'+elRand1+' '+param1[elRand1]);
            if(c==0){wynik=wyn[c];}else
                 if(wyn[c]<=wynik){
                wynik=wyn[c];}
        }
    } 
        console.log('8) wynik: '+wynik)    
}
loElem(ARRAY,2)

//9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
function randArray(arrPar){
    if(Array.isArray(arrPar)){
        let nARR=arrPar.slice();
        let arrWynikowa=[];
        let elRand2;
        for (let ab = 0; ab < arrPar.length; ab++) {
            elRand2=Math.floor(Math.random()*nARR.length); 
            arrWynikowa.push(nARR[elRand2]);
            nARR.splice(elRand2 , 1);
        }
        console.log('9) '+ARRAY);
        console.log('9) '+arrWynikowa);  
    }
    else console.log('9) parametr nie jest tabllicą');
}
randArray(ARRAY);
//10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random.  And return a result. [a,b,c,d] => (((a+-b)+-c)+-d)
function addSub(asArray) {
    if(Array.isArray(asArray)){
        let result=asArray[0];
        let elRand3;
        for (let iA = 1; iA < asArray.length; iA++){
            console.log('10): '+result);
            elRand3=Math.floor(Math.random()*2);
            if(elRand3==0){
                result+=asArray[iA];
            }
            if(elRand3==1){
                result-=asArray[iA];
            }
        }
    }
    else console.log('10) parametr nie jest tabllicą'); 
}
addSub(ARRAY);
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
    console.log("11) We have: "+dayPol);
}
dayPol();

//12) Create a function that tells us how many days till Friday 

function manyDay (){
    let datePol1=(new Date()).getDay();
    let mDTF=0;
    if(datePol1==6){
        mDTF=6
    }else {mDTF=5-datePol1};
    console.log('12) do piątku zostało: '+mDTF+' dni')
}
manyDay ();

//13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
function aritOper(){
    let numOne= Math.floor(Math.random()*100);
    let numTwo= Math.floor(Math.random()*100);
/*     let add=numOne+numTwo;
    let multiply= numOne*numTwo;
    let substract= numOne-numTwo;
    let dzielenie=numOne/numTwo; */
    let nObj={
        add:numOne+numTwo,
        multiply:numOne*numTwo,
        substract:numOne-numTwo,
        dzielenie:numOne/numTwo,
    }
    console.log(nObj);
    console.log('13) wylosowanie liczby to: '+numOne+' i '+numTwo);
    console.log('13) dodawanie:'+nObj.add);
    console.log('13) mnożenie:'+nObj.multiply);
    console.log('13) odejmowanie:'+nObj.substract);
    console.log('13) dzielenie:'+nObj.dzielenie);
}
aritOper()

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
