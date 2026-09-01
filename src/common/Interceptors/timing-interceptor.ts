import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class TimingInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const time=Date.now();
        return next.handle().pipe(
            tap(()=>(
                console.log(`time taken: ${time-Date.now()}`)
            ))
        );
    }
}