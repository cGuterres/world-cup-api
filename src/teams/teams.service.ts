import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}
  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.save({ ...createTeamDto });

    return team;
  }

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  async findOne(id: number): Promise<Team> {
    return await this.teamRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<DeleteResult> {
    if (!id) {
      return;
    }

    return await this.teamRepository.delete(id);
  }
}
