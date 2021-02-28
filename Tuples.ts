let student1 = ["Gokul", 23,"MCA","Vellore"];
let student3 = ["Sachin", 21,"B.Sc", "Vellore"];
let student2 = ["Sweatha", 22,"BA.Eng", "Coimbator"];
console.log('Student1 Details:' +student1);
console.log('Student1 Details:' +student2);
console.log('Student1 Details:' +student3);
let num = [24,45,12,65,2,96,7,36,54,10,320,57,8];
console.log('Number list befor pushing:'+num);
num.push(100);
console.log('Number list after pushing:'+num);
console.log('NUmber list after popout:'+num.pop());
console.log(num);
student1[4] = "Pass";
student2[4] = "Fail";
student3[4] = "Pass";
console.log("Adding new data to the students");
// console.log(student1);
// console.log(student2);
// console.log(student3);
for(let i=0;i<student1.length;i++){
    console.log(student1[i]);
    
}
console.log('\n');
for(let i=0;i<student1.length;i++){
    console.log(student2[i]);
    
}
console.log('\n');
for(let i=0;i<student1.length;i++){
    console.log(student3[i]);   
}
console.log('\n');




