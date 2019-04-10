import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PostsResponse } from '../interfaces/responses/posts-response.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(environment.postsUrl);
  }

  public getPostById(postId: string): Observable<Post> {
    return this.getPosts().pipe(
      map(response => {
        return response.posts;
      }),
      map(posts => {
        return posts.filter(post => {
          return post.id === postId;
        });
      }),
      map(posts => posts[0])
    );
  }
}
