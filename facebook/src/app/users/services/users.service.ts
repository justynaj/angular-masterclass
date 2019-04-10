import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PostsResponse } from '../../posts/interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';
import { User } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(environment.postsUrl);
  }
  public getUserById(userId: string): Observable<User> {
    return this.getPosts().pipe(
      map(response => {
        return response.posts;
      }),
      map(posts => {
        return posts.filter(post => {
          return post.author.id === userId;
        });
      }),
      map(posts => posts[0].author)
    );
  }
}
