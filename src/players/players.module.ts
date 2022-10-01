import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player } from './entities/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [TypeOrmModule.forFeature([Player])],
  exports: [TypeOrmModule],
})
export class PlayersModule {}
