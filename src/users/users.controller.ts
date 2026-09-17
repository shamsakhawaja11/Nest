import { Body, Controller, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./users.CreateUserDto";
import { UpdateUserDto } from "./users.UpdateUserDto";
import { PositiveIntPipe } from "src/common/custom-pipes/parseintpipe";
import { AuthGuard } from "src/common/Guards/AuthGuard2";

@Controller('/userss')
export class UsersController{
    @UseGuards(AuthGuard)
    @Post()
    save(@Body()dto:CreateUserDto){
        console.log(`${dto.name} ${dto.age} ${dto.email} ${dto.password}`);
    }

    @Patch(':id')
    update(@Body()dto:UpdateUserDto,@Param('id',PositiveIntPipe)id:number){
        console.log('updated')
    }

}