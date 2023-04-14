let firstValue = 30
let secondValue = 30

if(firstValue < secondValue){
  console.log(`${firstValue} is less than ${secondValue}`)
}

if(firstValue <= secondValue){
  console.log(`${firstValue} is less than or equal to ${secondValue}`)
}

if(firstValue === secondValue){
  console.log(`${firstValue} is exactly equal to ${secondValue}`)
}

if(firstValue !== secondValue) {
  console.log(`${firstValue} is not equal to ${secondValue}`)
}






let minimumVotingAge = 18 
let age = 20 
let registeredToVote = true

if ( age >= minimumVotingAge  && registeredToVote === true){
  console.log("Congrats you can vote!")
}

if(age >= minimumVotingAge || registeredToVote === true ) {
  console.log("Congrats you can vote!")
}







let currentCount = 1
while (currentCount <= 10 ) {
  console.log(`the current Count is: ${currentCount}`)
  currentCount = currentCount+1  //currentCount += 1 (ugyanaz)
  //currentCount ++ (ez is ugyanaz)
  //currentCount -= 1 (ugyanaz) vagy currentCount --


}
console.log("done")








/*for (let evenNumber = 2; evenNumber <=20 ; current += 2) {
  console.log(evenNumber)
} */

let startCount = 2
let andCount = 20
let countSkip = 2

for (let counter = startCount; counter <= andCount; counter += 2){
  console.log(counter)
}