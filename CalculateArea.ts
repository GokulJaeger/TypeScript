function rectangle(l:number, b:number) {
    let area:number;
    area=l*b;
    console.log("Area of Rectangle:"+area.toPrecision(5));   
}
function square(a:number) {
    let area:number;
    area=a*a;
    console.log("Area of Rectangle:"+area.toPrecision(4));   
}
function triangle(b:number, h:number) {
    let area:number;
    area=(h*b)*0.5;
    console.log("Area of Rectangle:"+area.toPrecision(5));   
}
rectangle(12,14);
square(5);
triangle(45,17);
