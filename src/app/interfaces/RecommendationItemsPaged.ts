import { RecommendationItem } from './RecommendationItem';

export interface RecommendationItemsPaged {
   items: RecommendationItem[];
   page: number;
   pageSize: number;
   totalSize: number;
}
