/* const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 12) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!"); */

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 8) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
