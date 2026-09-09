import { Controller, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./users.CreateUserDto";
import { UpdateUserDto } from "./users.UpdateUserDto";

@Controller('/users')
export class UsersController{
    
    @Post()
    save(dto:CreateUserDto){
        console.log(`${dto.name} ${dto.age} ${dto.email} ${dto.password}`);
    }

    @Patch()
    update(dto:UpdateUserDto){
        console.log('updated')
    }

}