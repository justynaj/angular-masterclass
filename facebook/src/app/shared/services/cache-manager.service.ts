import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {
  private cache = new Map();

  constructor() {}

  public save(url: string, response: HttpResponse<any>): void {
    this.cache.set(url, response);
  }

  public get(url: string) {
    return this.cache.get(url);
  }

  public has(url: string): boolean {
    return this.cache.has(url);
  }
}
