
var say = parseInt(prompt("Say daxil et:"));
var netice1=1;
var netice2=1;
var netice3=0;
var netice4=0;

if(isNaN(say)) {
    alert("Bir eded daxil edin:");
}
else {
    for(let i=0; i<say;i++) {
    var say2 = prompt(i+ ".eded");
    netice1*=parseInt(say2);
    netice4+=parseInt(say2);
}
}
var isareler = prompt(" * ; / ; + ; - isarelerinden birini daxil edin:");
if (isareler == '*') {
    alert(netice1.toFixed(2));
}

if (isareler == '+') {
    alert(netice4.toFixed(2));
}
else {
    alert("Qeyd olunan isarelerden birini daxil edin;");
}




