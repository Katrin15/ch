import { FeedBaseItem } from './FeedBaseItem';

export interface CharityItem extends FeedBaseItem {
   full?: string;
   is_approved?: boolean;

   raised: number;
   goal: number;
}
