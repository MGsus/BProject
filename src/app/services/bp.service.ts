import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bp } from '../shared/models/bp.model';
import { Cert } from '../shared/models/cert.model';
import { Opp } from '../shared/models/opp.model';

@Injectable()
export class BpService {
  constructor(private http: HttpClient) {}

  getBps(): Observable<any> {
    return this.http.get<any>(`http://169.57.42.77:31064/api/bp/list`, {
      withCredentials: true,
    });
  }

  getBpByName(name: string): Observable<Bp> {
    return this.http.get<Bp>(`http://169.57.42.77:31064/api/bp/${name}`, {
      withCredentials: true,
    });
  }

  newBP(body: Bp): Observable<Bp> {
    return this.http.post<Bp>(`http://169.57.42.77:31064/api/bp/insert`, body, {
      withCredentials: true,
    });
  }

  updateBP(bp: Bp): Observable<any> {
    return this.http.put(`http://169.57.42.77:31064/api/bp/update`, bp, {
      withCredentials: true,
    });
  }

  insertCert(bpNombre: String, cert: Cert): Observable<any> {
    return this.http.put(
      `http://169.57.42.77:31064/api/bp/update`,
      { bp_nombre: bpNombre, bp_cert: cert },
      {
        withCredentials: true,
      }
    );
  }

  getOpps(): Observable<any> {
    return this.http.get(`http://169.57.42.77:31064/api/bp/list`, {
      withCredentials: true,
    });
  }
  insertOpp(bpNombre: String, opp: Opp): Observable<any> {
    return this.http.put(
      `http://169.57.42.77:31064/api/bp/insertOpp`,
      {
        bp_nombre: bpNombre,
        bp_opp: opp,
      },
      { withCredentials: true }
    );
  }

  updateOpp(bpNombre: String, opp: Opp): Observable<any> {
    return this.http.put(
      `http://169.57.42.77:31064/api/bp/updateOpp`,
      { bp_nombre: bpNombre, bp_opp: opp },
      { withCredentials: true }
    );
  }
}
