import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PostsResponse } from '../../posts/interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';
import { User } from '../../shared/interfaces/user.interface';
import { Users } from '../../shared/interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Users> {
    return this.http.get<PostsResponse>(environment.postsUrl).pipe(
      map(response => response.posts),
      map(posts => {
        const users = posts.map(post => {
          return post.author;
        });
        // console.log(users);
        return users;
      })
    );
  }
  public getUserById(userId: string): Observable<User> {
    return this.getUsers().pipe(
      map(users => {
        return users.find(user => {
          return user.id === userId;
        });
      })
    );
  }
}
