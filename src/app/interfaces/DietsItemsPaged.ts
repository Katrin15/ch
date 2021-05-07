import { DietsItem } from './DietsItem';

export interface DietsItemsPaged {
   items: DietsItem[];
   page: number;
   pageSize: number;
   totalSize: number;
}
