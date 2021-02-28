function twist({ a, b }: { a: number; b: string }) {
  let x = a;
  let y;
  console.log("The type of y before assignment:" + y + " Type:" + typeof y);
  y = b;
  let z;
  console.log(
    `The type of a:${x} Type:${typeof x} and b:${y} Type:${typeof y}`
  );
  z = x;
  // x=y;
  y = z;
  console.log("The type of y:" + y + " Type:" + typeof y);
}
twist({ a: 100, b: "gokul" });
