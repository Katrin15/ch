import { FeedBaseItem } from './FeedBaseItem';

export interface NewsItem extends FeedBaseItem {
   full?: string;
   is_approved?:boolean;
}
