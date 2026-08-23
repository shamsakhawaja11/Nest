import { Injectable } from "@nestjs/common";

export interface PaymentProvider{
    charge(amount:number):Promise<{success:boolean,provider:string}>
}

@Injectable()
export class PaymentService implements PaymentProvider{
    charge(amount: number): Promise<{ success: boolean; provider: string; }> {
        return {success:true,provider:'paypal'};
    }
}