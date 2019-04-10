import { User } from '../../shared/interfaces/user.interface';
export interface Post {
  id: string;
  created_time: string;
  author: User;
  body: string;
  images: string[];
}
