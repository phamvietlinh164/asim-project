import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubModule } from './api/club/club.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { URL } from '../config/Url';

@Module({
  imports: [
    MongooseModule.forRoot(URL.mongoUrl),
    ClubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
