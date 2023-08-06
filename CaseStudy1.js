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

function repeateditem(){
    const freq = {};
    for (const i of arr){
        freq[i]=(freq[i]||0)+1;
    } 
}

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
let arr=[1,3,5,4,7,5,4];
const sum=SqSum(arr);
console.log('The sum of squares of elements is '+sum);
