function rectangle(l, b) {
    var area;
    area = l * b;
    console.log("Area of Rectangle:" + area.toPrecision(5));
}
function square(a) {
    var area;
    area = a * a;
    console.log("Area of Rectangle:" + area.toPrecision(4));
}
function triangle(b, h) {
    var area;
    area = (h * b) * 0.5;
    console.log("Area of Rectangle:" + area.toPrecision(5));
}
rectangle(12, 14);
square(5);
triangle(45, 17);
