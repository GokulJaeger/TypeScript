function twist(a, b) {
    var x = a;
    var y;
    console.log('The type of y before assignment:' + y + ' Type:' + typeof (y));
    y = b;
    var z;
    console.log('The type of a:' + x + ' Type:' + typeof (x) + ' and b:' + y + ' Type:' + typeof (y));
    z = x;
    // x=y;
    y = z;
    console.log('The type of y:' + y + ' Type:' + typeof (y));
}
twist(100, "gokul");
