import { Inject, Injectable } from "@nestjs/common";
export interface dbConnection{
    connectionString:string
}

@Injectable()
export class DBConfigService{
    constructor(@Inject('DATABASE')private config:dbConnection){}
    async getDatabse(){
        return this.config;
    }
}