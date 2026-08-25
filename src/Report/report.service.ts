import { Inject, Injectable } from "@nestjs/common";

interface dbConnection{
    connectionString:string,
}
@Injectable()
export class ReportService{
    constructor(@Inject('DATABASE')private db:dbConnection ){}

    getConnectionString(){
        return this.db;
    }
}