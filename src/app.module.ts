import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { GroupsModule } from './groups/groups.module';
import { MatchsModule } from './matchs/matchs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './groups/entities/group.entity';
import { Match } from './matchs/entities/match.entity';
import { Player } from './players/entities/player.entity';
import { Team } from './teams/entities/team.entity';

@Module({
  imports: [
    TeamsModule,
    PlayersModule,
    GroupsModule,
    MatchsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'worldcup',
      entities: [Group, Match, Player, Team],
      synchronize: true,
      migrations: ['./src/typeorm/migrations'],
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
