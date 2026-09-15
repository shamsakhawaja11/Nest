import { ArgumentsHost,BadRequestException,Catch,ExceptionFilter,HttpException,Logger} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

interface ErrorPayload {
  success: false;
  statusCode: number;
  message: string | string[];
  error: string;
  path: string;
  timestamp: string;
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    const payload = this.resolvePayload(exception, req.url);

    // Requirement 4: severity-based logging
    if (payload.statusCode >= 500) {
      this.logger.error(
        exception instanceof Error ? exception.stack : exception,
      );
    } else {
      this.logger.warn(
        `${payload.statusCode} ${payload.error} - ${req.method} ${req.url} - ${JSON.stringify(payload.message)}`,
      );
    }

    res.status(payload.statusCode).json(payload);
  }

  private resolvePayload(exception: unknown, path: string): ErrorPayload {
    // 1. Validation errors (must be checked before the generic HttpException case)
    if (exception instanceof BadRequestException) {
      const responseBody = exception.getResponse();
      if (
        typeof responseBody === 'object' &&
        responseBody !== null &&
        'message' in responseBody &&
        Array.isArray((responseBody as any).message)
      ) {
        return this.buildErrorPayload(
          400,
          (responseBody as any).message,
          'VALIDATION_ERROR',
          path,
        );
      }
    }

    // 2. Any other intentionally-thrown HttpException
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      return this.buildErrorPayload(
        status,
        exception.message,
        exception.constructor.name,
        path,
      );
    }

    // 3. Known Prisma error codes
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      if (exception.code === 'P2002') {
        return this.buildErrorPayload(
          409,
          'A record with this value already exists',
          'CONFLICT_ERROR',
          path,
        );
      }
      if (exception.code === 'P2025') {
        return this.buildErrorPayload(
          404,
          'Record not found',
          'RECORD_NOT_FOUND',
          path,
        );
      }
    }

    // 4. Truly unknown — never leak internals
    return this.buildErrorPayload(
      500,
      'Internal server error',
      'SERVER_ERROR',
      path,
    );
  }

  private buildErrorPayload(
    statusCode: number,
    message: string | string[],
    error: string,
    path: string,
  ): ErrorPayload {
    return {
      success: false,
      statusCode,
      message,
      error,
      path,
      timestamp: new Date().toISOString(),
    };
  }
}