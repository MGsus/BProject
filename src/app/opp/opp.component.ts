import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BpService } from '../services/bp.service';
import { Opp } from '../shared/models/opp.model';

@Component({
  selector: 'app-opp',
  templateUrl: './opp.component.html',
  styleUrls: ['./opp.component.scss'],
})
export class OppComponent implements OnInit {
  data: any;
  isText: boolean = false;
  isLoading: boolean = false;
  isOpp: boolean = false;
  opp: Opp;

  constructor(private bpService: BpService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.bpService.getOpps().subscribe(
      (ans) => {
        let finalData = [];
        for (const item of ans)
          for (const opp of item.bp_opp)
            finalData.push({
              bp_nombre: item.bp_nombre,
              opp_nombre: opp.opp_nombre,
              opp_numero: opp.opp_numero,
              opp_sales_stage: opp.opp_sales_stage,
              opp_fecha_creacion: opp.opp_fecha_creacion,
              opp_quarter: opp.opp_quarter,
              opp_week: opp.opp_week,
              opp_monto: opp.opp_monto,
            });

        this.data = finalData;
      },
      (err) => console.error(err),
      () => {
        this.isText = true;
        this.isLoading = false;
      }
    );
  }
}
