import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class RequestIdMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        let uuid=crypto.randomUUID();
        if(typeof req['requestId']==="undefined"){
            req['requestId']=uuid
        }
        res.setHeader('X-Request-Id',req['requestId'])
        next()
    }
}