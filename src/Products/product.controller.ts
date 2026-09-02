import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
let products=["biscuit","watch","cake","macroni"];
@Controller('products')
export class ProductsController{
    
    @Get()
    get(){
        return "Hello World";
    }
    @Get('/featured')
    getProducts(){
        return products;
    }
    @Get(':id')
    getId(){
        return `id is here`;
    }
    @Post()
    insertProducts(@Body() product:string){
        products.push(product);
    }
    @Put()
    updateProducts(@Body()newproducts:string[]){
        products=newproducts;
    }
    @Patch()
    replaceProduct(@Body()product:string){
        products.pop();
        products.push(product);
    }
    @Delete()
    deleteProduct(){
        products.pop();
    }

}