import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TextService {
  constructor(private http: HttpClient) {}

  sendText(text: any): Observable<any> {
    console.log(text);

    return this.http.post(`http://159.122.181.35:31257/api/upload-text`, {
      text: text,
    });
  }
}
