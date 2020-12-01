import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTweetsForm: FormGroup;
  hashtag = new FormControl('');

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.searchTweetsForm = this.formBuilder.group({
      hashtag: this.hashtag,
    });
  }

  searchTweet() {
    this.router.navigate([`/tweet/${this.searchTweetsForm.value.hashtag}`]);
  }
}
