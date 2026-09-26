import { Body, Controller, Delete, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { UpdateUserDto } from "./users.UpdateUserDto";
import { PositiveIntPipe } from "src/common/custom-pipes/parseintpipe";
import { AuthGuard } from "src/common/Guards/authguard";
import { Request } from "express";
import { RolesGuard } from "src/common/Guards/roles.guard";
import { Roles } from "src/common/decorators/customdecorators";
import { AuthGuard2 } from "src/common/Guards/AuthGuard2";

export interface request extends Request{
    user: {id:number,name:string}
}

@Controller('/userss')
export class UsersController{
   
    @Post()
    save(@Req() req:request){
        console.log(req.user);
    }

    @Patch(':id')
    update(@Body()dto:UpdateUserDto,@Param('id',PositiveIntPipe)id:number){
        console.log('updated')
    }
    @UseGuards(AuthGuard2,RolesGuard)
    @Roles('admin')
    @Delete(':id')
    removeUser(@Param('id')id:string){
        console.log('user removed')
    }

}