import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageComponent } from './pages/users/users-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [UsersPageComponent, UserItemComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
