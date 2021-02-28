var weeks;
(function (weeks) {
    weeks[weeks["Monday"] = getdatam('Gokul')] = "Monday";
    weeks[weeks["Tuesday"] = getdatat('Sachin')] = "Tuesday";
    weeks[weeks["Wednesday"] = getdataw('Sweatha')] = "Wednesday";
    weeks[weeks["Thursday"] = getdatath('Pavi')] = "Thursday";
    weeks[weeks["Friday"] = getdataf('Rajesh')] = "Friday";
    weeks[weeks["Saturday"] = getdatas('Manisha')] = "Saturday";
    weeks[weeks["Sunday"] = getdatasu('holiday')] = "Sunday";
})(weeks || (weeks = {}));
function getdatam(day) {
    if (day === 'Gokul') {
        console.log('0==>Introduction to CoreJava');
        return 0;
    }
}
function getdatat(day) {
    if (day === 'Sachin') {
        console.log('1==>Java dataypes');
        return 1;
    }
}
function getdataw(day) {
    if (day === 'Sweatha') {
        console.log('2==>java funtions');
        return 2;
    }
}
function getdatath(day) {
    if (day === 'Pavi') {
        console.log('3==>java class and objects');
        return 3;
    }
}
function getdataf(day) {
    if (day === 'Rajesh') {
        console.log('4==>java Overlodading and Overriding');
        return 4;
    }
}
function getdatas(day) {
    if (day === 'Manisha') {
        console.log('5==>Java OOPs concetps');
        return 5;
    }
}
function getdatasu(day) {
    if (day === 'holiday') {
        console.log('6==>Today is holiday');
        return 6;
    }
}
for (var i = 0; i < 7; i++) {
    console.log(i + "->");
    setTimeout(weeks[i], 5000);
}
