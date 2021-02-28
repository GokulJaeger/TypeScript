function genmail(fname, lname) {
    var num = Math.floor(Math.random() * Math.floor(10000));
    var lword = num.toString();
    if (lname != undefined) {
        console.log(fname.concat(lname) + "@gmail.com");
    }
    else {
        console.log(fname.concat(lword) + "@gmail.com");
    }
}
function gst(price, sgst, cgst) {
    if (sgst === void 0) { sgst = 0.06; }
    if (cgst === void 0) { cgst = 0.011; }
    var tot1 = price * sgst;
    var tot2 = price + cgst;
    var tot = price + tot1 + tot2;
    return tot;
}
function dispmark(name) {
    var mark = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mark[_i - 1] = arguments[_i];
    }
    var word = name;
    var tot = 0;
    var avg = 0;
    console.log("Name of the Student: " + word);
    for (var i = 0; i < mark.length; i++) {
        tot += mark[i];
    }
    avg = tot / mark.length;
    console.log(word + " marks are: " + mark);
    console.log("Total mark: " + tot + "/" + mark.length * 100);
    console.log("Average marks: " + avg);
}
console.log("Default Parameter:");
var ans = gst(12450);
console.log("Gst for 12450: " + ans + "\n");
console.log("Optional Paramater:");
genmail("Gokul", "Jaeger");
genmail("Sweatha");
genmail("Pavi");
genmail("Sachin");
console.log("\n");
console.log("Rest Parameter:");
dispmark("Gokul", 87, 98, 45, 98, 67, 54, 87);
