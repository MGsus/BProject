import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BpService } from '../services/bp.service';
import { Bp } from '../shared/models/bp.model';
import { Opp } from '../shared/models/opp.model';

@Component({
  selector: 'app-opp-edit',
  templateUrl: './opp-edit.component.html',
  styleUrls: ['./opp-edit.component.css'],
})
export class OppEditComponent implements OnInit {
  data: any;
  isText: boolean = false;
  isLoading: boolean = false;
  bp: Bp;
  opp: Opp;
  isOpp: boolean;
  bp_opp: any;

  oppForm: FormGroup;
  opp_fecha_creacion: FormControl;
  opp_nombre: FormControl;
  opp_numero: FormControl;
  opp_tipo: FormControl;
  opp_sales_stage: FormControl;
  opp_quarter: FormControl;
  opp_week: FormControl;
  opp_monto: FormControl;

  constructor(
    private bpService: BpService,
    private routerParam: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.routerParam.params.subscribe((res) => {
      this.bpService.getBpByName(res.name).subscribe(
        (bp) => {
          this.bp = bp;
          if (bp.bp_opp.length > 0) {
            bp.bp_opp.forEach((item: any) => {
              if (item.opp_numero != res.opp)
                console.log(`no se ha encontrado la oportunidad en el bp`);

              this.isOpp = true;
              this.bp_opp = item;
            });

            this.opp_fecha_creacion = new FormControl(
              bp.bp_opp.opp_fecha_creacion
            );
            this.opp_nombre = new FormControl(bp.bp_opp.opp_nombre);
            this.opp_numero = new FormControl(bp.bp_opp.opp_numero);
            this.opp_tipo = new FormControl(bp.bp_opp.opp_tipo);
            this.opp_sales_stage = new FormControl(bp.bp_opp.opp_sales_stage);
            this.opp_quarter = new FormControl(bp.bp_opp.opp_quarter);
            this.opp_week = new FormControl(bp.bp_opp.opp_week);
            this.opp_monto = new FormControl(bp.bp_opp.opp_monto);
          }
        },
        (err) => console.error(err),
        () => {
          this.isLoading = false;
          if (this.isOpp) {
            this.oppForm = this.formBuilder.group({
              opp_fecha_creacion: this.opp_fecha_creacion,
              opp_nombre: this.opp_nombre,
              opp_numero: this.opp_numero,
              opp_tipo: this.opp_tipo,
              opp_sales_stage: this.opp_sales_stage,
              opp_quarter: this.opp_quarter,
              opp_week: this.opp_week,
              opp_monto: this.opp_monto,
            });
          }
        }
      );
    });
  }

  updateOpp() {
    this.bpService.updateOpp(this.bp.bp_nombre, this.oppForm.value).subscribe(
      (ans) => console.log(`Oportunidad Actualizada Correctamente`),
      (err) => console.log(err),
      () => this.router.navigate([`/bp-detail/${this.bp.bp_nombre}`])
    );
  }
}
