import { EducationPathItem } from './EducationPathItem';

export interface EducationPathItemsPaged {
   items: EducationPathItem[];
   page: number;
   pageSize: number;
   totalSize: number;
}
