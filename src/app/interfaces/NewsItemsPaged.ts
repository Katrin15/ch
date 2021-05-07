import { NewsItem } from './NewsItem';

export interface NewsItemsPaged {
   items: NewsItem[];
   page: number;
   pageSize: number;
   totalSize: number;
}
