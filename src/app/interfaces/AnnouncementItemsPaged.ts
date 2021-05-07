import { Announcement } from './Announcement';

export interface AnnouncementItemsPaged {
   items: Announcement[];
   page: number;
   pageSize: number;
   totalSize: number;
}
