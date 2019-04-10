import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../../shared/interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {
  public user: User = null;
  destroy$ = new Subject();

  constructor(private usersService: UsersService, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.setupUser();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  private setupUser(): void {
    const userId = this.route.snapshot.params.userId;
    this.usersService
      .getUserById(userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.user = response;
        },
        error: err => {
          console.log(err);
        }
      });
  }
}
