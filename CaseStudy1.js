//Function to read first array element and check if prime or not

function Prime(num){
    if (num<=1){
        return 'Not Prime';
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if (num%i===0){
            return 'Not Prime';
        }
    }
    return 'Yes, it is Prime';
}
function CheckFirst(arr){
    const first=arr[0];
    return Prime(first);
}
const numbers=[3,5,6,7,8,4];
console.log('First item is '+ numbers[0]+', '+CheckFirst(numbers));

//Program to find most frequent array item
function CheckRepeat(arr){
    var freq=0;
    var mostOccuring;    
    for (var i=0;i<arr.length;i++){
        freq=0;         
        for (var j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                freq++;
            }
        }        
        if(freq>1){
            mostOccuring = arr[i];
        }
    }    
    if (mostOccuring !== undefined){
        console.log('The most frequent array item is ' + mostOccuring + ', it occurs ' + freq + ' times.');
    }else{
        console.log('No repeated items found in the array.');
    }
}
const ListOfNumbers=[2,2,5,5,4,6,8,2,2,4,6,3,7];
CheckRepeat(ListOfNumbers);

//Odd or Even from 0 to 15

function OddorEven(a){
    if (a%2===0){
        return a+', is Even.';
    }else{
        return a+', is Odd.';
    }
}

for(i=0;i<=15;i++){
    console.log(OddorEven(i));
}

//Sum of squares of array elements
function SqSum(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=(arr[i])**2;
    }
    return sum;
}
let listOfDiffNumbers=[1,3,5,4,7,5,4];
const sum=SqSum(listOfDiffNumbers);
console.log('The sum of squares of elements is '+sum);