import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    private num:any[]=[]
    findAll(){
       return this.num;
    }
}