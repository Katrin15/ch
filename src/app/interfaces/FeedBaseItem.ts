import { Picture } from './Picture';

export interface FeedBaseItem {
   id?: string;
   title: string;
   alias?: string;
   preview?: string;
   pictures?: Picture[];
   createdAt?: Date;
   updatedAt?: Date;
   createdBy?: string;
   likesCount?: number;
}
