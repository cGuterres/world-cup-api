import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    const group = await this.groupRepository.save({ ...createGroupDto });

    return group;
  }

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.find({});
  }

  async findOne(id: number): Promise<Group> {
    return await this.groupRepository.findOneBy({ id });
  }
}
