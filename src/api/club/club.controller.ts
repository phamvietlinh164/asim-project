import { Controller, Get, Param, Req, Post, Body, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { ClubService } from './club.service';

@Controller('club')
export class ClubController {

  constructor(private readonly clubService: ClubService) { };

  @Get()
  async club(@Req() request: Request) {

    if (!request.query.score) {
      const result = await this.clubService.findAll();
      return result
    } else {
      const result = Number.isInteger(+request.query.score) ?
        await this.clubService.findByScore(+request.query.score) :
        "score have to be a interger";
      return result
    }
  }


  @Get(':clubId')
  async clubByClubId(@Param('clubId') clubId: string) {
    return await this.clubService.findById(clubId)
  }

  @Post()
  async create(
    @Body('clubId') clubId: string,
    @Body('name') name: string,
    @Body('score') score: number) {
    return await this.clubService.create({ clubId, name, score })
  }

  @Post('pagination')
  async pagination(
    @Body('numberInOnePage') numberInOnePage: number,
    @Body('page') page: number,
  ) {
    return await this.clubService.pagination(numberInOnePage, page)
  }

  @Post('search')
  async search(
    @Body('key') key: string,
  ) {
    return await this.clubService.search(key)
  }

  @Post('filterByScore')
  async filterByScore(
    @Body('min') min: number,
    @Body('max') max: number,
  ) {
    return await this.clubService.filterByScore(min, max)
  }

  @Put()
  async edit(
    @Body('_id') _id: string,
    @Body('name') name: string,
    @Body('score') score: number) {
    return await this.clubService.update({ _id, name, score })
  }

  @Delete(':_id')
  async delete(
    @Param('_id') _id: string) {
    return await this.clubService.delete(_id);
  }
}