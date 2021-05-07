import { FeedBaseItem } from './FeedBaseItem';
import { Picture } from './Picture';

export interface RecommendationItem extends FeedBaseItem{
    full?: string;
    fullDivided?: string[2];
    phone?: string;
    email?: string;
    website?: string;
    date?: Date;
    priority?: number;
    is_approved?:boolean;
    picture?: Picture;
 }