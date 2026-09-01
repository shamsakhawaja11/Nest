import { Controller, Get, Inject, Post, Query, UseGuards } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { AuthGuard } from "src/common/Guards/authguard";
import { RolesGuard } from "src/common/Guards/roles.guard";
import { Roles } from "src/common/decorators/customdecorators";
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@Controller('logger')
export class LoggerController{
    constructor(private service:LoggerService,
        @Inject('APP_LOGGER')private Service:LoggerService
    ){}
    @Post()
    @Roles('admin')
    logs(@Query('message')message:string){
        this.service.log(message);
    }
    @Get()
    getLogs():string[]{
        return this.Service.getLogs();
    }


    
}