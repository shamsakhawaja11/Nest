import { Body, Controller, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./users.CreateUserDto";
import { UpdateUserDto } from "./users.UpdateUserDto";

@Controller('/users')
export class UsersController{
    
    @Post()
    save(@Body()dto:CreateUserDto){
        console.log(`${dto.name} ${dto.age} ${dto.email} ${dto.password}`);
    }

    @Patch(':id')
    update(@Body()dto:UpdateUserDto,@Param('id')id:string){
        console.log('updated')
    }

}