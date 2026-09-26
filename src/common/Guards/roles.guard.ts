import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles, ROLES_KEY } from '../decorators/customdecorators';

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector:Reflector){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req=context.switchToHttp().getRequest()
        const role=this.reflector.getAllAndOverride<string[]>(ROLES_KEY,[context.getHandler(),context.getClass()]);
        if(!role){
            return true;
        }
        else if(role!==null && req.user==null){
            throw new UnauthorizedException('not allowed')
        }else if(!role.includes(req.user.role)){
            throw new ForbiddenException('not allowed')
        }
        return true;
    }
}
