import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { OrdersService } from "./orders.service";

@Module({
    imports:[UserModule],
    controllers:[],
    providers:[OrdersService],
    exports:[],
})export class OrdersModule{}