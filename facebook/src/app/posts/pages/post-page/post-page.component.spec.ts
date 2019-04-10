import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostPageComponent } from './post-page.component';
import { PostListItemComponent } from '../../../shared/components/post-list-item/post-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostPageComponent, PostListItemComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: ':postId', component: PostPageComponent }])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
