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
console.log(1,2,3,4,5)

console.log('-------# 7')
console.log(5,4,3,2,1)

console.log('-------# 8')

function getMarkInfo (condition){
   if (condition === 10){
       console.log('У вас максимальный балл')
   }else{
       console.log('У вас средний балл')
   }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('-------# 9')

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

getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)

console.log('-------# 10')




