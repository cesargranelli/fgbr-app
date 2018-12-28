import { Player } from './player.model';

export interface Team {
    id: number;
    name: string;
    players: Array<Player>;
    slug: string;
}