import { Group } from 'src/groups/entities/group.entity';
import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'matchs' })
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  groupId: number;

  @Column()
  homeTeamId: number;

  @Column()
  awayTeamId: number;

  @Column()
  matchDate: Date;

  @Column()
  location: string;

  @Column({ default: null })
  scoreHomeTeam?: number;

  @Column({ default: null })
  scoreAwayTeam?: number;

  @OneToOne(() => Group)
  @JoinColumn()
  group: Group;

  @OneToOne(() => Team)
  @JoinColumn()
  homeTeam: Team;

  @OneToOne(() => Team)
  @JoinColumn()
  awayTeam: Team;
}
