/* eslint-disable prettier/prettier */
import { Team } from 'src/teams/entities/team.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  actualClub: string;

  @Column()
  shirtNumber: number;

  @Column()
  birthDate: Date;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
