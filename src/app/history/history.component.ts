import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../services/archive.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  data: any;
  isLoading: boolean = true;
  isText: boolean = false;

  constructor(private archiveService: ArchiveService) {}

  ngOnInit(): void {
    this.archiveService.getHistory().subscribe(
      (ans) => (this.data = ans),
      (err) => console.log(err),
      () => {
        this.isText = true;
        this.isLoading = false;
      }
    );
  }
}
