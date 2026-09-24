import { Body, Controller, Param, Patch, Post, Req, Request, UseGuards } from "@nestjs/common";
import { UpdateUserDto } from "./users.UpdateUserDto";
import { PositiveIntPipe } from "src/common/custom-pipes/parseintpipe";
import { AuthGuard } from "src/common/Guards/AuthGuard2";

export interface req extends Request{
    return {id:1,name:'shamsa'}
}

@Controller('/userss')
export class UsersController{
    @UseGuards(AuthGuard)
    @Post()
    save(@Req() req:Request){
        console.log(req.user);
    }

    @Patch(':id')
    update(@Body()dto:UpdateUserDto,@Param('id',PositiveIntPipe)id:number){
        console.log('updated')
    }

}