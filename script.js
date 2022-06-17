// 1. Write a function that takes a number and returns true if it is positive number and false if it is a negative number 
// hence we are gonna need an if = true else = false thingy 
// zero is neither positive or negative but the portal between the two

function isNumberPositive(number) {
    if (number > 0 ) {
        return true;
    }
    else if (number == 0) {
        return 'neither';
    }
    else return false;
}

console.log(isNumberPositive(5)); //true
console.log(isNumberPositive(-7)); // false 
console.log(isNumberPositive(0)); // neither

//Alternate way 

function isNumberPositive2(number2) {
    if (Math.sign(number2)=== 1) {
        return true;
    }
    else return false;
}

console.log (isNumberPositive2(-5)); // false
console.log (isNumberPositive2(15)); // true


//2.Write a function that takes number of days and converts it into an age.
//Number of days in a year is 365.25 on avg due to leap years
const calculateAge = (Days) => {
    const ageFromDays = Days / 365.25;
    console.log(ageFromDays)
}
calculateAge(36525);
calculateAge(7953); //Days ive been alive on time of writing (should be around 21.75)
 

//3.Write a function that takes three numbers and returns the largest of the three numbers.
//Probably a math function to find largest 

function getLargestNumber(num1, num2, num3) {
    let highest = Math.max(num1, num2, num3);
    return highest;
}
console.log(getLargestNumber(15, 7, 54)); //54
console.log(getLargestNumber(-15, 27.45, 98764)); //98764
console.log(getLargestNumber(-99.99, -50, -37.45)); //-37.45


//4. Write a function that takes an array of names and returns the last name from the array of names
//arrays start at zero so last would be length -1

const names = ["Nathan", "Carlota", "Georgia", "Konstantina", "Sandra"]
console.log(names[names.length - 1]); //sandra 

//5.Write a function that takes an array of numbers and returns true if all
//of the numbers are positive. It should return false if there are one or more
// negative numbers in the array

function positiveNumbers(num4, num5, num6) {
    if(num4 > 0 && num5 > 0 && num6 > 0) {
        return true;
    }
    else return false;
}
console.log(positiveNumbers(5, 17, 50)); //True
console.log(positiveNumbers(-7, 15, 99)); // false

//Why did the programmer quit their job ??
//Because they didn't get arrays