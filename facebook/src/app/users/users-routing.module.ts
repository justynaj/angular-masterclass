import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPageComponent } from './pages/users/users-page.component';

const routes: Routes = [
  {
    path: ':userId',
    component: UsersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
