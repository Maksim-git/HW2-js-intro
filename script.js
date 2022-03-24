console.log('-------# 5')
let yearPersone1 = 2005;
let yearPersone2 = 1996;

let summation = yearPersone1 + yearPersone2;
let subtraction = yearPersone1 - yearPersone2;
let multiplication  = yearPersone1 * yearPersone2;
let division = yearPersone1 / yearPersone2;

console.log(`summation - ${summation}`);
console.log(`subtraction - ${subtraction}`);
console.log(`multiplication - ${multiplication}`);
console.log(`division - ${division}`);

console.log('-------# 6')
let numList1 = '';

for ( i = 1; i <= 5; i++) {

    numList1 = numList1 + i + " ";
}

console.log(numList1); 

console.log('-------# 7')
let numList2 = '';

for ( i = 5; i >= 1; --i) {

    numList2 = numList2 + i + " ";
}

console.log(numList2); 

console.log('-------# 8')

function getMarkInfo (condition){
   if (condition === 10){
       console.log('У вас максимальный балл')
   }else{
       console.log('У вас средний балл')
   }
}
getMarkInfo(10);
getMarkInfo(1);

console.log('-------# 9');

function getDayInfo (position){
    if (position === 0){
        console.log('Sunday')
    } else if(position === 1){
        console.log('Monday')
    }else if(position === 2){
        console.log('Tuesday')
    }else if(position === 3){
        console.log('Wednesday')
    }else if(position === 4){
        console.log('Thursday')
    }else if(position === 5){
        console.log('Friday')
    }else if(position === 6){
        console.log('Saturday')
    }else{
        console.log('Wrong data')
    }
 }

getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);
getDayInfo(7);

console.log('-------# 10')

let arrayData = ['a', 'b', 'c'];
arrayData.push(1,2,3);

console.log(arrayData)

console.log('-------# 11')

let number1 = [1,2,3];
let number2 = [4,5,6];
let number3 = number1.concat(number2);

console.log(number3)

console.log('-------# 12')

function countNumber (number){
    let sum = 0;
    for (i = 1; i <= number; i++){
        sum = (i*(i+1)/2);
    }
    console.log(sum)
}

countNumber(3)


