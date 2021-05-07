// import { Picture } from './Picture';
import { FeedBaseItem } from './FeedBaseItem';

export interface MarketItem extends FeedBaseItem {
   full?: string;
   is_approved?:boolean;

   category: string;
   viewsCount: number;
   price: number;
   location1?: string;
   location2?: string;

   // market-details
   description?: string;
   condition?: string;
   payment?: string;
   delivery?: string;
   provider?: string;
}