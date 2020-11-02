import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Club } from '../../mongoSchema/club.schema';


@Injectable()
export class ClubService {
  constructor(@InjectModel(Club.name) private clubModel: Model<Club>) { }

  async findAll(): Promise<Club[]> {
    return this.clubModel.find().exec();
  }

  async findById(clubId: string): Promise<Club> {
    return this.clubModel.findOne({ _id: clubId }).exec();
  }

  async findByScore(score: number): Promise<Club[]> {
    return this.clubModel.find({ score: score }).exec();
  }

  async create(club: {}): Promise<Club> {
    const createdClubModel = new this.clubModel(club);
    return createdClubModel.save();
  }

  async pagination(numberInOnePage: number, page: number): Promise<Club[]> {
    return this.clubModel.find().skip((page - 1) * numberInOnePage).limit(numberInOnePage).exec();
  }

  async search(key: string): Promise<Club[]> {
    var reg = new RegExp(key, "i");
    return this.clubModel.find({ "name": { $regex: reg, $options: 'i' } }).exec()
  }

  async filterByScore(min, max): Promise<Club[]> {

    return this.clubModel.find().where('score').gt(min - 1).lt(max + 1).exec()
  }


  async update(clubInfo: { _id: string, name: string, score: number }): Promise<Club> {

    const id = clubInfo._id;
    const updateObj: any = {};
    if (clubInfo.name) {
      updateObj.name = clubInfo.name
    }
    if (clubInfo.score) {
      updateObj.score = clubInfo.score
    }

    return this.clubModel.findOneAndUpdate({ _id: id }, updateObj, { useFindAndModify: false }).exec();
  }

  async delete(id: string): Promise<{}> {

    return await this.clubModel.deleteOne({ _id: id }).exec()
  }
}