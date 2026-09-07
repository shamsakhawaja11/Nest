import { BadRequestException, Body, Controller, Delete, Get, Head, Header, Headers, HttpCode, NotFoundException, Param, Patch, Post, Put, Query, Res } from "@nestjs/common";

let products={
    prod1: { id:8,name:'biscuit'},
    prod2: { id:2,name:'birryani'}
};

import type{ Response } from "express";
@Controller('products')
export class ProductsController {
    
    @Get(':id')
    getId(@Param('id')id:string){
        for(let item in products){
            if(products[item].id==Number(id)){
                return "id Found";
            }
        }
        throw new NotFoundException(`${id} not found`)

    }}
    @Post()
    insertProduct(@Body()product:any){
        if(product['name']==undefined||product['name']==""){
            throw new BadRequestException(`${name} is invalid`);
        }
    }
    @Delete(':id')
    deleteProduct(@Param('id')id:string){
        for(let item in products){
            if(products[item].id===Number(id)){
                products[item]=null;
                return `product with ${id} removed`;
            }
        }
        throw new NotFoundException(`${id}not found`);
    }



    // @Get()
    // getme(){
    //     return "Hello World";
    // }
    // @Get('/featured')
    // getProducts(){
    //     return products;
    // }
    // @Get()
    // getproduct(@Query('category')categpry:string,@Query('limit')limit:string){
    //     return {categpry,limit};
    // }
    
    // @Get(':id')
    // getId(@Param('id')id:string){
    //     return `id is here ${id}`;
    // }
    // @Post()
    // insertProducts(@Body() product:any){
    //     products.push(product);
    // }
    // @Put()
    // updateProducts(@Body()newproducts:string[]){
    //     products=newproducts;
    // }
    // @Patch()
    // replaceProduct(@Body()product:string){
    //     products.pop();
    //     products.push(product);
    // }
    // @Delete()
    // deleteProduct(){
    //     products.pop();
    //}


    // @Get('/debug/headers')
    // getHeaders(@Headers('useragent')useragent:string) {
    //     return {userAgent:useragent};
    // }
    // @HttpCode(201)
    // @Post()
    // insert(@Body()product:string) {
    //     products.push(product);
    // }
    // @Header('X-powered-by','Nest Learning')
    // @Get()
    // get(@Res()res:any) {
    //     return products;
    // }
    // @Get('/res-test')
    // resTest(@Res() res: Response) {
    //  res.status(201).json(products); // does the client actually get this?
    // }
}