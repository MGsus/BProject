import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ArchiveService } from '../services/archive.service';
import { TweetService } from '../services/tweet.service';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-archive-component',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  archiveForm: FormGroup;
  docName = new FormControl('');
  results: any;
  isLoading: boolean;
  isData: boolean;
  data: any;

  constructor(
    private archiveService: ArchiveService,
    private formBuilder: FormBuilder,
    private textService: TextService
  ) {}

  ngOnInit(): void {
    this.archiveForm = this.formBuilder.group({
      docName: this.docName,
    });
  }

  sendName() {
    this.isLoading = true;
    this.archiveService
      .searchArchives(this.archiveForm.value.docName)
      .subscribe(
        (res) => {
          this.results = res;
          this.textService.sendText(this.results.text).subscribe(
            (ans) => {
              this.data = ans;
              console.log(this.data);
            },
            (error) => console.log(error),
            () => {
              this.isData = true;
              this.isLoading = false;
            }
          );
        },
        (error) => console.error(error)
      );
  }
}
