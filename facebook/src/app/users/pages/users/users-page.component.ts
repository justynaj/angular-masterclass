import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../shared/interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  public user: User = null;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.setupUser();
  }

  private setupUser(): void {
    const userId = this.route.snapshot.params.userId;
    this.usersService.getUserById(userId).subscribe({
      next: response => {
        this.user = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
