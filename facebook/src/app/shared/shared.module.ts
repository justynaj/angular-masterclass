import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [PostListComponent, PostListItemComponent]
})
export class SharedModule {}
