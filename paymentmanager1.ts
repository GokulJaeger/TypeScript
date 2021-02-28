export default interface paymentmanager1{
    name:String;
    bank:string;
    amt:number;
    bal:number;
    branch:string;
    upi_id:string;
    otp:number;
    doPayment():void;
    getPaymentStatus():void;
}
