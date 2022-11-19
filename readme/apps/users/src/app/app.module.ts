import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BlogUserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
