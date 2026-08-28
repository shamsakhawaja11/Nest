import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class RequestModdlewre implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        if(req.headers['x-request-id']!=null){
            req['requestId']=req.headers['x-request-id'];
             res.setHeader('x-request-id',req.requestId);
        }else{
            req['requestId']=crypto.randomUUID();
            res.setHeader('x-request-id',req.requestId);
        }
        next();
    }
}