import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { Posts } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts: Posts = [];

  constructor(private postsService: PostsService) {}

  public ngOnInit(): void {
    this.setupPosts();
  }

  public trackPost(index: number): number {
    return index;
  }

  private setupPosts(): void {
    this.postsService.getPosts().subscribe({
      next: response => {
        this.posts = response.posts;
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
