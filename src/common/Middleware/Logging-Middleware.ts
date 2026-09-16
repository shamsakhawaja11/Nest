import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggingMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        console.log(req['url'],req['method'],req['requestId'])
        next()
    }
}