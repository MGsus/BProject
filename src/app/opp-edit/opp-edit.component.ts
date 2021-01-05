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
  opp_fecha_creacion: FormControl = new FormControl();
  opp_nombre: FormControl = new FormControl();
  opp_numero: FormControl = new FormControl();
  opp_tipo: FormControl = new FormControl();
  opp_sales_stage: FormControl = new FormControl();
  opp_quarter: FormControl = new FormControl();
  opp_week: FormControl = new FormControl();
  opp_monto: FormControl = new FormControl();

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

          bp.bp_opp.forEach((item: any) => {
            if (item.opp_nombre == res.opp_nombre) {
              this.isOpp = true;
              this.bp_opp = item;
            }
          });
        },
        (err) => console.error(err),
        () => {
          this.isLoading = false;

          this.oppForm = this.formBuilder.group({
            opp_fecha_creacion: this.bp_opp.opp_fecha_creacion,
            opp_nombre: this.bp_opp.opp_nombre,
            opp_numero: this.bp_opp.opp_numero,
            opp_tipo: this.bp_opp.opp_tipo,
            opp_sales_stage: this.bp_opp.opp_sales_stage,
            opp_quarter: this.bp_opp.opp_quarter,
            opp_week: this.bp_opp.opp_week,
            opp_monto: this.bp_opp.opp_monto,
          });
        }
      );
    });
  }

  updateOpp() {
    this.bpService.updateOpp(this.bp.bp_nombre, this.oppForm.value).subscribe(
      (ans) => console.log(`Oportunidad Actualizada Correctamente`),
      (err) => console.log(err),
      () => this.router.navigate([`/opp`])
    );
  }
}
