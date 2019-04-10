import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  public post: Post = null;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.setupPost();
  }

  private setupPost(): void {
    const postId = this.route.snapshot.params.postId;
    this.postsService.getPostById(postId).subscribe({
      next: response => {
        this.post = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
