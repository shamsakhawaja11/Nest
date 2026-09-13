private readonly logger = new Logger(AllExceptionsFilter.name);

catch(exception: unknown, host: ArgumentsHost) {
  this.logger.error(
    exception instanceof Error ? exception.stack : exception,
  );
  // ...build response
}