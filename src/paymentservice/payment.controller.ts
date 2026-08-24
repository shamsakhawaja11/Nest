import { Controller, Get, Post, Query } from "@nestjs/common";
import { PaymentService } from "./payment.service";

@Controller('payment')
export class PaymentController{
    constructor(private service:PaymentService){}
    @Post()
    pay(@Query('amount')amount:string){
        this.service.pay(Number(amount));
    }
}