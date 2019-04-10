import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';
import { UserItemComponent } from '../../components/user-item/user-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersPageComponent, UserItemComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: ':userId', component: UsersPageComponent }])
      ]
    }).compileComponents();
  }));
  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
