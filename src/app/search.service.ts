import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { GithubResponse } from './github-response';
import { GithubItem } from './github-item';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) {
  }

  search(term: string): Observable<GithubItem[]> {
    return this.httpClient.get<GithubResponse>(`https://api.github.com/search/repositories?q=${term}`).pipe(
      map(response => response.items)
    );
  }
}
