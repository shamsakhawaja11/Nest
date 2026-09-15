import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response, } from "express";

@Catch()
export class AllExceptionFilters implements ExceptionFilter {
  private readonly logger=new Logger(AllExceptionFilters.name);
  catch(exception: any, host: ArgumentsHost) {
    const ctx=host.switchToHttp();
    const req=ctx.getRequest<Request>()
    const res=ctx.getResponse<Response>()

    if(exception instanceof HttpException) {

      const status=exception.getStatus()
      const error=exception.getResponse()
      //validationpipe exception
      if (
        status === 400 &&
        typeof error === 'object' &&
        error != null &&
        'message' in error &&
        Array.isArray(error.message)         
      ) {
        return res.status(400).json({
          success:false,
          statusCode:400,
          type:'VALIDATION_ERROR',
         // message:error.message,
          message:typeof res==='string'?res : (res as any).message ?? exception.message,
          path:req.url,
          timestamp:new Date().toISOString()
        });
      }
      //other http excep
      return res.status(status).json({
        success:false,
        statusCode:status,
        type:'HTTP_EXCEPTION',
        message:exception.message,
        path:req.url,
        timestamp:new Date().toISOString()
      })
    }//db errors etc
    else {
      res.status(500).json({
        success:false,
        statusCode:500,
        type:'SERVER_ERROR',
        message:'Internal server error',
        path:req.url,
        timestamp:new Date().toISOString()
      });
    }
    //console.log(exception)

    this.logger.error (
      exception instanceof Error?exception.stack:exception
    )
  }
}