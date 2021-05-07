import { Picture } from './Picture';
import { FeedBaseItem } from './FeedBaseItem';

export interface DietsItem extends FeedBaseItem {
   full?: string;
   preview?: string;
   alias?:string;
}
