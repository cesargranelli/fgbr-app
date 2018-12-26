import { Player } from './player.model';

export interface Team {
    id: number;
    slug: string;
    name: string;
    players: Array<Player>;
}