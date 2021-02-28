export default interface paymentmanager2{
    name:String;
    bank:string;
    amt:number;
    bal:number;
    branch:string;
    card:number;
    otp:number;
    doPayment():void;
    getPaymentStatus():void;
}