import { Module } from "@nestjs/common";
import { StripePaymentService } from "./service";
import { MockPAymentService } from "./MockService";

@Module({
    imports:[],
    controllers:[],
    providers:[
        {
            provide:'PAYMENT_PROVIDER',
          //  useClass:StripePaymentService,
            useClass:MockPAymentService,
        },
    ],
    exports:[],
})export class PaymentModule{}