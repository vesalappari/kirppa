import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello.controller';
import { User } from './user.entity';
import ormconfig from './ormconfig';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule {}
