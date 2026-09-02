import { Controller, Get } from "@nestjs/common";

@Controller('products')
export class ProductsController{
    
    @Get()
    get(){
        return "Hello World";
    }
}