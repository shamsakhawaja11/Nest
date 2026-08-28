import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PaymentModule } from './paymentservice/paymentservice.module';
import { ReportModule } from './Report/report.module';
import { ConfigModule } from './dbConfig/dbConfig.module';
import { RequestModdlewre } from './Middleware/reuest.middleware';

@Module({
  imports: [
    UserModule,PaymentModule,ReportModule,ConfigModule.forRoot({host:'localhost',port:5432,database:'crm'}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestModdlewre).forRoutes('*');
  }
} 
