import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateMatchDto } from './dto/create-match.dto';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchsService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
  ) {}
  async create(createMatchDto: CreateMatchDto): Promise<Match> {
    const match = await this.matchRepository.save({ ...createMatchDto });

    return match;
  }

  async findAll(): Promise<Match[]> {
    return await this.matchRepository.find({
      relations: ['group', 'homeTeam', 'awayTeam'],
    });
  }

  async findOne(id: number): Promise<Match> {
    return await this.matchRepository.findOne({
      where: { id },
      relations: ['group', 'homeTeam', 'awayTeam'],
    });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.matchRepository.delete(id);
  }
}
