import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter{
    private readonly logger=new Logger(GlobalExceptionFilter.name)
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const req = ctx.getRequest<Request>()
        const res = ctx.getResponse<Response>()

        if (exception instanceof HttpException) {
            if (
                exception instanceof BadRequestException &&
                exception.getStatus() === 400 &&
                typeof exception.getResponse() === 'object' &&
                exception.getResponse() !== null &&
                'message' in exception.getResponse() &&
                Array.isArray(exception.getResponse().message)
            ) {
                const error=exception.getResponse() as string || object
                return res.status(400).json(this.buildErrorPayload(400, error.message, 'VALIDATION_ERROR',req.url))
        
            }
            const status = exception.getStatus()
            return res.status(status).json(
                this.buildErrorPayload(status, exception.message, exception.constructor.name,req.url)
            );
        }
        else {
            if(
                exception instanceof Prisma.PrismaClientKnownRequestError &&
                exception.code === 'P2002'
            ) {
                return res.status(409).json(
                    this.buildErrorPayload(409, exception.message, 'CONFLICT_ERROR', req.url)
                );
            }
            else if (
                exception instanceof Prisma.PrismaClientKnownRequestError &&
                exception.code === 'P2025'        
            ) {
                return res.status(404).json(
                    this.buildErrorPayload(404, exception.message, 'RECORD_NOT_FOUND', req.url)
                );
            }
            else {
                if(exception instanceof InternalServerErrorException) {
                    return res.status(500).json(
                        this.buildErrorPayload(500, exception.message, 'SERVER_ERROR', req.url)
                    );
                }
            }
        }     
        console.log(`${this.logger.error} stack: ${exception.stack}`)
   
    }
    private buildErrorPayload (status, message, error, path) {
        return {
            success: false,
            statusCode: status,
            message: message,
            error: error,
            path: path,
            timestamp: new Date().toISOString()
        }
    }

}