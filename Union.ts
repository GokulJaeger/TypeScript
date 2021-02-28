function add(a: number | string, b: number | string) {
  try {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
  } catch (e) {
    console.log(e);
  }
}
// function disp(array?: number[] | string[]) {
  
//   if (typeof array === "number") {
//     console.log(typeof array);
//   }
//   if (typeof array === "string") {
//     console.log(typeof array);
//   }
// }
let x: number | string;
x = add(12, 34);
let y: number | string;
y = add("Gokul", "R");
console.log(x+"\n");
console.log(y+"\n");
let z = add(78, "gokul");
console.log(z+"\n");
let arr: number[] | string[];
arr = [60, 24, 15, 74, 35, 84, 12, 19, 34, 40];
let l = arr.length;
// console.log(disp(arr));
console.log(typeof arr);
console.log(l);
for (let i = 0; i < l; i++) {
    console.log(arr[i]);
}
console.log("\n");

arr = ["Gokul", "Sweatha", "Sachin", "Pavi", "Kishore", "Srinath", "Rikhitha"];
// console.log(disp(arr));
console.log(typeof arr);
let q = arr.length;
for (let i = 0; i < q; i++) {
    console.log(arr[i]);
  }
