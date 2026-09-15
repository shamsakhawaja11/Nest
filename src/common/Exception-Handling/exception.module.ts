import { Module } from "@nestjs/common";
import { AllExceptionFilters } from "./exception";

@Module({
    providers:[
        {
            provide:'APP_FILTER',
            useClass:AllExceptionFilters
        }
    ]
})export class ExceptionModule{}