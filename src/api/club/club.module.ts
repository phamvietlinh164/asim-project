import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubService } from './club.service';
// import { Authenticate } from '../../middleware/authenticate/authenticate';

import { Club, club_schema } from '../../mongoSchema/club.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Club.name, schema: club_schema }])],
  controllers: [ClubController],
  providers: [ClubService],
})

export class ClubModule { }
