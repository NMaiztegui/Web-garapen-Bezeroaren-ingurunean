import { Jarduera } from './jarduera';
export class Kluba {
    id!: number;
    name!: string;
    cover_photo_small!: string;
    sport_type!: string;
    privatea!: boolean;
    member_count!: number;
    description!: string;
    club_type!: string;
    jarduerak!: Jarduera[];
}

//modelo de la db