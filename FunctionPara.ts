function genmail(fname:string, lname?:string):void{
    let num:number = Math.floor(Math.random()*Math.floor(10000));
    let lword:string = num.toString();
    if(lname!=undefined){
        console.log(fname.concat(lname)+"@gmail.com");   
    }
    else{
        console.log(fname.concat(lword)+"@gmail.com");  
    }
}        
function gst(price:number,sgst:number = 0.06,cgst:number = 0.011):number{
    let tot1 = price*sgst;
    let tot2 = price+cgst;
    let tot = price+tot1+tot2;
    return tot;
}
    
function dispmark(name:string,...mark:number[]):void{
    let word:string = name;
    let tot:number = 0;
    let avg:number = 0;
    console.log("Name of the Student: "+word);
    for(let i=0;i<mark.length;i++){
        tot+=mark[i];
    }
    avg=tot/mark.length;
    console.log(word+" marks are: "+mark);
    console.log("Total mark: "+tot+"/"+mark.length*100);
    console.log("Average marks: "+avg);   
}
console.log("Default Parameter:");

let ans = gst(12450);
console.log("Gst for 12450: "+ans+"\n");
console.log("Optional Paramater:");
genmail("Gokul","Jaeger");
genmail("Sweatha");
genmail("Pavi");
genmail("Sachin");
console.log("\n");
console.log("Rest Parameter:");
dispmark("Gokul",87,98,45,98,67,54,87);


   