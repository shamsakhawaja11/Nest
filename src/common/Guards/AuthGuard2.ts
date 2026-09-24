import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        const obj = {};
        if (!authHeader) {
            throw new UnauthorizedException('not allowed');
        }
        const token = authHeader.split(' ')[1];

        if (token !== 'valid') {
            throw new UnauthorizedException('not allowed');
        }
        req.user = { id: 1, name: 'shamsa' };
        return true;
    }
}
