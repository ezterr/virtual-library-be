import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/providers/database/database.module';
import { UserModule } from './user/user.module';
import { MailModule } from './common/providers/mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [DatabaseModule, MailModule, UserModule, AuthModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
