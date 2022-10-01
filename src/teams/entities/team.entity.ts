import { Player } from 'src/players/entities/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  initials: string;

  @Column()
  flag: string;

  @Column()
  region: string;

  @OneToMany(() => Player, player => player.team)
  players: Player[];
}
