import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req=context.switchToHttp().getRequest();
        const header=req.headers['x-api-key'];
        if(header!="secret1234"){
            throw new UnauthorizedException('unauthorized');
        }
        return true;
    }
}