"use strict";
exports.__esModule = true;
var upi = /** @class */ (function () {
    function upi() {
        this.name = "Gokul";
        this.bank = "SBI";
        this.upi_id = "gok10@sbi.in";
        this.otp = 3456;
        this.amt = 1457;
        this.bal = 78945;
        this.branch = "Vellore";
    }
    upi.prototype.doPayment = function () {
        var str = this.otp.toString();
        if (str.length == 4) {
            if (this.amt < this.bal) {
                console.log(this.amt + "Amount debited from you " + this.upi_id + " account.");
            }
            else {
                console.log("Account balance is low.");
            }
        }
        else {
            console.log("wrong otp");
        }
    };
    upi.prototype.getPaymentStatus = function () {
        console.log("Hi " + this.name + ". " + this.amt + "/- is debited from your " + this.bank + " account threw UPI payment. Your current balance is " + (this.bal - this.amt));
        console.log("Payment Successfull");
    };
    return upi;
}());
var card = /** @class */ (function () {
    function card() {
        this.name = "Sweatha";
        this.bank = "ICICI";
        this.card = 457896843214;
        this.otp = 3456;
        this.amt = 7854;
        this.bal = 95478;
        this.branch = "Vellore";
    }
    card.prototype.doPayment = function () {
        var str = this.card.toString();
        var str1 = this.otp.toString();
        if (str.length == 12 && str1.length == 4) {
            if (this.amt < this.bal) {
                console.log(+this.amt + "Amount debited from you " + this.bank + " account.");
            }
            else {
                console.log("Account balance is low.");
            }
        }
        else {
            console.log("Wrong otp or card number.");
        }
    };
    card.prototype.getPaymentStatus = function () {
        console.log("Hi " + this.name + ". " + this.amt + "/- is debited from your " + this.bank + " account threw Card payment. Your current balance is " + (this.bal - this.amt));
        console.log("Payment Successfull");
    };
    return card;
}());
var user1 = new upi();
console.log("\nUPI PAYMENT");
user1.doPayment();
console.log("Payment Status:");
user1.getPaymentStatus();
var user2 = new card();
console.log("\nCARD PAYMENT");
user2.doPayment();
console.log("Payment Status:");
user2.getPaymentStatus();
