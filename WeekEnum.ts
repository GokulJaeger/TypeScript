enum weeks{
    Monday=getdatam('Gokul'),
    Tuesday=getdatat('Sachin'),
    Wednesday=getdataw('Sweatha'),
    Thursday=getdatath('Pavi'),
    Friday=getdataf('Rajesh'),
    Saturday=getdatas('Manisha'),
    Sunday=getdatasu('holiday'),
}

 function getdatam(day:String):number{      
    if(day==='Gokul'){         
        console.log('0==>Introduction to CoreJava');   
        return 0;
    }
 }
 function getdatat(day:String):number{
    if(day==='Sachin'){
       console.log('1==>Java dataypes');
       return 1;
    }
    
}
function getdataw(day:String):number{
    if(day==='Sweatha'){
       console.log('2==>java funtions');
       return 2;
    }
}
function getdatath(day:String):number{
    if(day==='Pavi'){
       console.log('3==>java class and objects');
       return 3;
    }
}
function getdataf(day:String):number{
    if(day==='Rajesh'){
       console.log('4==>java Overlodading and Overriding');
       return 4;
    }
}
function getdatas(day:String):number{
    if(day==='Manisha'){
       console.log('5==>Java OOPs concetps');
       return 5;
    }
}
function getdatasu(day:String):number{
    if(day==='holiday'){
       console.log('6==>Today is holiday');
       return 6;
    }
}


for(let i=0;i<7;i++){
    console.log(i+"->"+weeks[i]);
}
