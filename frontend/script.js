//for (initialization ; condition ; incrementing) { }

/*let member = ["Bence", "Ágota", "Márió", "Balázs"]

for ( let i = 0 ; i <= member.length-1 ; i ++){
  console.log(i)
  console.log(member[i])
} */

let number = [10, 40, 20, -20, 50]
let max = number [0] // 10, 40, 50

for ( let i = 0 ; i <= number.length-1 ; i++ ){
    let num = number[i] // num jelen értéke 10, 40, 20, -20, 50
    if (num > max ){ // 10 > 10, 40 > 10, 20 > 40, -20 > 40, 50>40
      max = num }

}
console.log(max)








