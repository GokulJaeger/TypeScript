import paymentmanager1 from './paymentmanager1';
import paymentmanager2 from './paymentmanager2';
class upi  implements paymentmanager1{
    
    name= "Gokul";
    bank ="SBI";
    upi_id = "gok10@sbi.in";
    otp=3456;
    amt=1457;
    bal=78945;
    branch="Vellore";
    doPayment(): void {
        let str:string = this.otp.toString();
        if(str.length==4){
            if(this.amt<this.bal){
                console.log(this.amt+"Amount debited from you "+this.upi_id+" account.");
                
            }
            else{
                console.log("Account balance is low.");
                
            }
        }
        else{
            console.log("wrong otp");
            
        }
    }
    getPaymentStatus(): void {
        console.log("Hi "+this.name+". "+this.amt+"/- is debited from your "+this.bank+" account threw UPI payment. Your current balance is "+(this.bal-this.amt));
        
        console.log("Payment Successfull");
        
    }

}
class card implements paymentmanager2{
    name= "Sweatha";
    bank ="ICICI";
    card = 457896843214;
    otp=3456;
    amt=7854;
    bal=95478;
    branch="Vellore";
    doPayment(): void {
        let str:string = this.card.toString();
        let str1:string = this.otp.toString();
        if(str.length==12 && str1.length==4){
            if(this.amt<this.bal){
                console.log(+this.amt+"Amount debited from you "+this.bank+" account.");
                
            }
            else{
                console.log("Account balance is low.");
                
            }
        }
        else{
            console.log("Wrong otp or card number.");
            
        }
    }
    getPaymentStatus(): void {
        console.log("Hi "+this.name+". "+this.amt+"/- is debited from your "+this.bank+" account threw Card payment. Your current balance is "+(this.bal-this.amt));
        
        console.log("Payment Successfull");
    }
}

let user1:upi= new upi();
console.log("\nUPI PAYMENT");
user1.doPayment();
console.log("Payment Status:");
user1.getPaymentStatus();

let user2:card= new card();
console.log("\nCARD PAYMENT");
user2.doPayment();
console.log("Payment Status:");
user2.getPaymentStatus();