import { Controller, Get, Inject, Param, Post, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { AuthGuard } from "src/common/Guards/authguard";
import { RolesGuard } from "src/common/Guards/roles.guard";
import { Roles } from "src/common/decorators/customdecorators";
import { TimingInterceptor } from "src/common/Interceptors/timing-interceptor";
import { PositiveIntPipe } from "src/common/pipes/positiveintipe";
@UseGuards(AuthGuard,RolesGuard)
@UseInterceptors(TimingInterceptor)
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
    @Get(':id')
    getLogs(@Param('id',PositiveIntPipe)id:number){
       return id;
    }


    
}