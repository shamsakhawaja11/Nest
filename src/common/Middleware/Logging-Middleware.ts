import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggingMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        const time=Date.now()
        res.on('finish',() => {
            let endTime=Date.now()
            console.log(`${req['url']}/${req['method']}\t${req['requestId']}-${endTime-time} `)
        })
        next()
    }
}