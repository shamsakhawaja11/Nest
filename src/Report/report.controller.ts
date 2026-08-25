import { Controller, Get } from "@nestjs/common";
import { ReportService } from "./report.service";

@Controller('connection-string')
export class ReportController{
    constructor(private service:ReportService){}

    @Get()
    get(){
        console.log(this.service.getConnectionString());
    }
}