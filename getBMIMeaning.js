const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return bmi = weight/(height*height)

}
function getBMIMeaning(weight, height) {
  //code here
  let bmi = calculateBMI(weight, height)
  if (bmi<18.5) 
    return "Underweight"
  else if(bmi<25)
    return "Normal weight"
  else
    return "Overweight"
}
module.exports = getBMIMeaning
//console.log(getBMIMeaning(53,1.65))