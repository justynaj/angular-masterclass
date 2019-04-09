import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { environment } from '../../../environments/environment';
import * as Ajv from 'ajv';
import * as SCHEME from '../../../schemas/posts.scheme.json';
import { Post } from '../interfaces/post.interface';

function fakePost(): Post {
  return {
    id: '',
    created_time: '',
    author: {
      id: '',
      name: '',
      avatar_url: ''
    },
    body: '',
    images: []
  };
}

describe('PostsService', () => {
  let service: PostsService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returns list of posts', () => {
    service.getPosts().subscribe({
      next: response => {
        expect(response.posts.length).toEqual(2);
      }
    });

    const httpMock = TestBed.get(HttpTestingController);
    httpMock.expectOne(environment.postsUrl).flush({ posts: [fakePost(), fakePost()] });
  });

  it('should return response in valid format (use schema)', () => {
    const ajv = new Ajv();
    const validator = ajv.compile(SCHEME['default']);

    service.getPosts().subscribe({
      next: response => {
        const isValid = validator(response);
        expect(isValid).toEqual(true);
        // console.log(validator.errors);
        expect(validator.errors).toBeNull();
      }
    });

    const httpMock = TestBed.get(HttpTestingController);

    const testRequest = httpMock.expectOne(environment.postsUrl);
    testRequest.flush({
      // posts: Array.from({ length: 5}).map(fakePost)
      posts: [fakePost(), fakePost(), fakePost(), fakePost(), fakePost()]
    });
  });
});
