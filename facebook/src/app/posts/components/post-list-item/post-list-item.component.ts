import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;

  constructor() {}

  ngOnInit() {}

  public getAuthorLink(): string {
    return `/users/${this.post.author.id}`;
  }

  public getPostLink(): string {
    return `/posts/${this.post.id}`;
  }
}
