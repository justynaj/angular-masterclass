import { User } from '../../shared/interfaces/user';
export interface Post {
  id: string;
  created_time: string;
  author: User;
  body: string;
  images: string[];
}
