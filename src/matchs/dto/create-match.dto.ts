export class CreateMatchDto {
  groupId: number;
  homeTeamId: number;
  awayTeamId: number;
  matchDate: Date;
  location: string;
  scoreHomeTeam?: number;
  scoreAwayTeam?: number;
  round?: number;
}
