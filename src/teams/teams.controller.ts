import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './entities/team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return await this.teamsService.create(createTeamDto);
  }

  @Get()
  async findAll(): Promise<Team[]> {
    return await this.teamsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Team> {
    return await this.teamsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.teamsService.remove(id);
  }
}
