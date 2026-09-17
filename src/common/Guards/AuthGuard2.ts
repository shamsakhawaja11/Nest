import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req=context.switchToHttp().getRequest()
        if(req['authorization'].bearer===null){
            throw new UnauthorizedException('not allowed')
        }else if(req['authorization'].bearer==='valid'){
            return {id:1,name:'shamsa'
            }
        }else{
            throw new UnauthorizedException('not allowed')
        }
    }
}


