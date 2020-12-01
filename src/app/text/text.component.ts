import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TextService } from '../services/text.service';
@Component({
  selector: 'app-text-component',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  textForm: FormGroup;
  text = new FormControl('');
  results: any;
  isLoading: boolean;
  isResults: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private textService: TextService
  ) {}

  ngOnInit(): void {
    this.textForm = this.formBuilder.group({
      text: this.text,
    });
  }

  sendText() {
    this.isLoading = true;
    this.textService.sendText(this.textForm.value.text).subscribe(
      (res) => (this.results = res),
      (error) => console.log(error),
      () => {
        this.isResults = true;
        this.isLoading = false;
      }
    );
  }
}
