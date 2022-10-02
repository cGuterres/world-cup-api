import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MatchsService } from './matchs.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { Match } from './entities/match.entity';

@Controller('matchs')
export class MatchsController {
  constructor(private readonly matchsService: MatchsService) {}

  @Post()
  async create(@Body() createMatchDto: CreateMatchDto): Promise<Match> {
    return await this.matchsService.create(createMatchDto);
  }

  @Get()
  async findAll(): Promise<Match[]> {
    return await this.matchsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Match> {
    return await this.matchsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.matchsService.remove(id);
  }
}
