import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostsResponse } from '../interfaces/responses/posts-response.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(environment.postsUrl);
  }
}
