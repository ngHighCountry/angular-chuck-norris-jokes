import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';

import { JokeResult, JokeCategoryResult } from './joke';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JokeService {
  API_BASE_URL = 'https://api.icndb.com';
  constructor(private http: HttpClient) {}

  getJokes(limit: number = 5, ...categories: string[]): Observable<JokeResult> {
    if (categories === undefined || categories === null) {
      categories = ['nerdy'];
    }

    return this.http.get<JokeResult>(
      `${this.API_BASE_URL}/jokes/random/${limit}/limitTo=${categories.join(
        ','
      )}`
    );
  }

  getCategories() {
    return this.http.get<JokeCategoryResult>(
      `${this.API_BASE_URL}/jokes/categories`
    );
  }
}
