import { Picture } from './Picture';
import { FeedBaseItem } from './FeedBaseItem';

export interface Announcement extends FeedBaseItem {
   price?: number;
   currency?: string;
   category_id?: string;
   subcategoryId?: string;
}
