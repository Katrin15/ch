import { FeedBaseItem } from './FeedBaseItem';

export interface EducationPathItem extends FeedBaseItem {
    name?: string;
    description: string;
    image?:string;
    hierarchy_level?: number;
    parent_id?:string;
    return_to?:string;
    children?: EducationPathItem[];
 }