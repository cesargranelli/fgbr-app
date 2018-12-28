import { Scout } from "./scout.model";

export interface Player {
    id: number;
    name: string;
    number: number;
    path: string;
    points: number;
    position: string;
    scouts: Array<Scout>;
    slug: string;
}