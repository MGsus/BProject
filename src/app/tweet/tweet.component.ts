import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from 'src/app/services/tweet.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { Tweet } from '../shared/models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit {
  tweets: Tweet;
  isLoading: boolean;
  isTweets: boolean;
  constructor(
    private router: ActivatedRoute,
    private tweetService: TweetService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((res) => {
      this.isLoading = true;
      this.tweetService.searchTweets(res['hashtag']).subscribe(
        (data) => (this.tweets = data),
        (error) => console.log(error),
        () => {
          this.isLoading = false;
          this.isTweets = true;
        }
      );
    });
  }
}
