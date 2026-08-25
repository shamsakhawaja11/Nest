import { Module } from "@nestjs/common";
import { ReportService } from "./report.service";
import { ReportController } from "./report.controller";

@Module({
    imports:[],
    providers:[ReportService],
    controllers:[ReportController],
    exports:[],
})export class ReportModule{}