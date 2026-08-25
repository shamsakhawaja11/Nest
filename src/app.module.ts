import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PaymentModule } from './paymentservice/paymentservice.module';
import { ReportModule } from './Report/report.module';
import { ConfigModle } from './common/configModule';
import { ConfigModule } from './dbConfig/dbConfig.module';

@Module({
  imports: [
    UserModule,PaymentModule,ReportModule,ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
