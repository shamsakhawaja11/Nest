import { Module } from "@nestjs/common";
import { StripePaymentService } from "./service";
import { MockPAymentService } from "./MockService";
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";

@Module({
    imports:[],
    controllers:[PaymentController],
    providers:[
        {
            provide:'PAYMENT_PROVIDER',
          //  useClass:StripePaymentService,
            useClass:MockPAymentService,
        },
        PaymentService
    ],
    exports:[],
})export class PaymentModule{}