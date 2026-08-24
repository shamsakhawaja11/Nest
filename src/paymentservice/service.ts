import { Injectable } from "@nestjs/common";

export interface PaymentProvider{
    charge(amount:number):Promise<{success:boolean,provider:string}>
}
@Injectable()
export class StripePaymentService implements PaymentProvider{
    charge(amount: number): Promise<{ success: boolean; provider: string; }> {
        return Promise.resolve( {success:true,provider:'paypal'});
    }
}