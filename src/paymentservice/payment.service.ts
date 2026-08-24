import { Inject, Injectable } from "@nestjs/common";
import type{ PaymentProvider } from "./service";

@Injectable()
export class PaymentService{
    constructor(@Inject('PAYMENT_PROVIDER')private paymentProvider:PaymentProvider){}
    pay(amount){
        console.log(amount);
    }
}