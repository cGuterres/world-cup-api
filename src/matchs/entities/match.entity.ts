import { Group } from 'src/groups/entities/group.entity';
import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ default: null })
  round?: number;

  @ManyToOne(() => Group)
  @JoinColumn()
  group: Group;

  @ManyToOne(() => Team)
  @JoinColumn()
  homeTeam: Team;

  @ManyToOne(() => Team)
  @JoinColumn()
  awayTeam: Team;
}
