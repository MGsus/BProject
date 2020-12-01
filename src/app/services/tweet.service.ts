import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../shared/models/tweet.model';
import { Observable } from 'rxjs';

@Injectable()
export class TweetService {
  constructor(private http: HttpClient) {}

  searchTweets(hashtag: String): Observable<Tweet> {
    return this.http.get<Tweet>(`http://159.122.181.35:31257/api/tweets/${hashtag}`);
  }
}
