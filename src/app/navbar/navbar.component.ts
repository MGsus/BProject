import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BpService } from '../services/bp.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTweetsForm: FormGroup;
  hashtag = new FormControl('');
  isAuth: boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isAuth().subscribe(
      (ans) => {
        if (ans.logged) this.isAuth = true;
        else this.isAuth = false;
      },
      (err) => console.error(err)
    );
    this.searchTweetsForm = this.formBuilder.group({
      hashtag: this.hashtag,
    });
  }

  searchTweet() {
    this.router.navigate([`/tweet/${this.searchTweetsForm.value.hashtag}`]);
  }
}
