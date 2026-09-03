import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
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
    @Get()
    getproduct(@Query('category')categpry:string,@Query('limit')limit:string){
        return {categpry,limit};
    }
    
    @Get(':id')
    getId(@Param('id')id:string){
        return `id is here ${id}`;
    }
    @Post()
    insertProducts(@Body() product:any){
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