//1) From years in array check for leap years [1974, 1900, 1985, 2000]
ar=[1974, 1900, 1985, 2000];
let year;

//3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let ar1=[3,5,2,1,6,23,8,4,98,3,7,3,98,4,98];
let suma=0;
let arrayLenght=ar1.length;

for(let i=0;i<arrayLenght;i++){
    if(ar1[i]%2!=0){
    suma+=ar1[i];}
    else continue;
}
console.log("Zadanie3, suma wynosi:"+suma);//37

//4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
//a)sposób pierwszy
let max=ar1[0];
let min=ar1[0];

for(let k=0;k<arrayLenght;k++){
    if(ar1[k]>=max){
        max=ar1[k];
    }
    for(let l=k+1;l<arrayLenght;l++){
        if(ar1[k]<ar1[l]&&ar1[k]<=min){//minimalna wartość
            min=ar1[k]; 
        }
    }
}

console.log("Max wynosi:"+max);
console.log("Min wynosi:"+min);
//a)sposób drugi


//5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run
let arr2= ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'];

let str=arr2[0];
let zm2='';
for(let n=1;n<arr2.length;n++){
    if(arr2[n].length>str.length){
        str=arr2[n];
    }
}

for(let n1=1;n1<arr2.length;n1++){//dwa słowa o tej samej dlugosci
    if(arr2[n1].length==str.length&&arr2[n1]!=str){
        zm2=zm2+', '+arr2[n1];
    }else continue;
}
str+=zm2;


console.log('najdłuższe słowo:'+str);

//6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.  

let maxValue=ar1[0];
let odp='Indeksy o najwyższych wartościach:  ';
for(let m=0;m<ar1.length;m++){
    if(ar1[m]>maxValue){
        maxValue=ar1[m];
    }
}
for(let n=0;n<ar1.length;n++){
    if(maxValue==ar1[n]){
        odp+=n+' ,';
    }
}
console.log(odp);

//7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
let count=suma2=0;
for(let o=0;o<ar1.length;o++){
    if(ar1[o]%2==0){
        suma2+=ar1[o];
        count++;
    }  
}
let srednia=Math.floor(suma2/count);
console.log('Srednia wynosi: '+srednia);

//8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

let s1=c1=0;
for(let p=2;p<ar1.length;p+=2){
    s1+=ar1[p];
    c1++;
}
let sr1=Math.floor(s1/c1);
console.log('Srdnia parzystych indeksów:'+sr1);

//9) With a given start value of 0. Iterate the array and add even items and subtract odd ones.

let arr5=[3,5,2,1,6,23,8,4,98,3,7,3,98,4,98];
let sumEven=0;
let tabOdd=[];
let tabOdd1=[];
let minOdd;

for(let z=0;z<arr5.length;z++){
    if(arr5[z]%2==0){
        sumEven+=arr5[z]
    }
    if(arr5[z]%2!=0){
        tabOdd.push(arr5[z])
    }
}



