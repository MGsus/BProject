import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BpService } from '../services/bp.service';
import { Bp } from '../shared/models/bp.model';
import { MsgComponent } from '../shared/msg/msg.component';

@Component({
  selector: 'bp-detail-name',
  templateUrl: './bp-detail.component.html',
  styleUrls: ['./bp-detail.component.scss'],
})
export class BpDetailComponent implements OnInit {
  bp: Bp;
  isText: boolean = false;
  isLoading: boolean = false;
  isCert: boolean = false;
  isCertForm: boolean = false;
  isOppForm: boolean = false;
  isOpp: boolean = false;
  bp_nombre: String;
  bp_opp: any;
  stage_lost: number;
  opp_monto_lost: number;
  stage_ganados: number;
  opp_monto_ganados: number;
  opp_lost_rendimiento: number;
  opp_won_rendimiento: number;

  acv: number;
  acv_monto: number;
  tcv: number;
  tcv_monto: number;

  certForm: FormGroup;
  cert_comercial = new FormControl();
  cert_tecnica = new FormControl();
  cert_tipo = new FormControl();
  cert_nombre = new FormControl();
  cert_puesto = new FormControl();
  cert_nivel = new FormControl();
  cert_fecha_tar = new FormControl();
  cert_correo = new FormControl();

  oppForm: FormGroup;
  opp_fecha_creacion = new FormControl();
  opp_nombre = new FormControl();
  opp_numero = new FormControl();
  opp_tipo = new FormControl();
  opp_sales_stage = new FormControl();
  opp_quarter = new FormControl();
  opp_week = new FormControl();
  opp_monto = new FormControl();

  editBPForm: FormGroup;
  ed_bp_nombre = new FormControl('');
  bp_perfilamiento = new FormControl('');
  bp_tipo = new FormControl('');
  bp_fecha_inicio = new FormControl();
  bp_fecha_fin = new FormControl();
  bp_presentacion = new FormControl();
  bp_firma_contrato_esa = new FormControl();
  bp_kick_off = new FormControl();
  bp_plan_negocios = new FormControl();
  bp_comercial = new FormControl();
  bp_readiness = new FormControl();
  bp_com_prensa = new FormControl();
  bp_num_oppty = new FormControl();
  bp_monto_oppty = new FormControl();
  bp_quarter_closed = new FormControl();
  bp_dia_cadencia = new FormControl();
  bp_sig_pasos = new FormControl();
  bp_cad_sem = new FormControl();
  isEditForm: boolean;

  constructor(
    private bpService: BpService,
    private routerParam: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public msg: MsgComponent,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.stage_ganados = 0;
    this.stage_lost = 0;
    this.opp_monto_lost = 0.0;
    this.opp_lost_rendimiento = 0.0;
    this.opp_won_rendimiento = 0.0;
    this.opp_monto_ganados = 0.0;
    this.tcv = 0;
    this.acv = 0;
    this.tcv_monto = 0.0;
    this.acv_monto = 0.0;
    this.routerParam.params.subscribe((res) => {
      this.bp_nombre = res.name;
      this.isLoading = true;
      this.bpService.getBpByName(res['name']).subscribe(
        (data) => {
          this.bp = data;
          if (data.bp_opp.length > 0) {
            this.isOpp = true;
            this.bp_opp = data.bp_opp;
          }
          console.log(data.bp_cert.length);
          if (data.bp_cert.length > 0) this.isCert = true;
        },
        (err) => console.log(err),
        () => {
          this.isLoading = false;
          this.isText = true;
          if (typeof this.bp_opp !== 'undefined') {
            this.bp_opp.forEach((opp: any) => {
              switch (opp.opp_tipo) {
                case 'TCV':
                  this.tcv++;
                  this.tcv_monto += Number.parseFloat(opp.opp_monto);
                  switch (opp.opp_sales_stage) {
                    case 'Won':
                      this.stage_ganados++;
                      this.opp_monto_ganados += Number.parseFloat(
                        opp.opp_monto
                      );
                      break;
                    case 'Lost':
                      this.stage_lost++;
                      this.opp_monto_lost += Number.parseFloat(opp.opp_monto);
                      break;
                    default:
                      break;
                  }
                  break;
                case 'ACV':
                  this.acv++;
                  this.acv_monto += Number.parseFloat(opp.opp_monto);
                default:
                  break;
              }
            });

            if (this.stage_ganados !== 0)
              this.opp_won_rendimiento =
                Math.round(
                  (this.stage_ganados /
                    (this.stage_ganados + this.stage_lost)) *
                    10000
                ) / 100;
            if (this.stage_lost !== 0)
              this.opp_lost_rendimiento =
                Math.round(
                  (this.stage_lost / (this.stage_lost + this.stage_ganados)) *
                    10000
                ) / 100;
          }
        }
      );
    });
  }

  newCert() {
    this.isText = false;
    this.isOpp = false;

    this.isCertForm = true;

    this.certForm = this.formBuilder.group({
      cert_nombre: this.cert_nombre,
      cert_comercial: this.cert_comercial,
      cert_tecnica: this.cert_tecnica,
      cert_tipo: this.cert_tipo,
      cert_puesto: this.cert_puesto,
      cert_nivel: this.cert_nivel,
      cert_fecha_tar: this.cert_fecha_tar,
      cert_correo: this.cert_correo,
    });
  }

  insertCert() {
    this.bpService.insertCert(this.bp_nombre, this.certForm.value).subscribe(
      (ans) =>
        this.msg.setMessage(
          `Certificación creada satisfactoriamente`,
          'success'
        ),
      (err) => console.log(err),
      () => {
        this.router.navigate([`/bp-detail/${this.bp_nombre}`]);
      }
    );
  }

  newOpp() {
    this.isText = false;
    this.isOpp = false;
    this.isOppForm = true;

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
  isEditBP() {
    this.isText = false;
    this.isEditForm = true;

    this.editBPForm = this.formBuilder.group({
      bp_nombre: this.bp_nombre,
      bp_perfilamiento: this.bp.bp_perfilamiento,
      bp_tipo: this.bp.bp_tipo,
      bp_fecha_inicio: this.bp.bp_fecha_inicio,
      bp_fecha_fin: this.bp.bp_fecha_fin,
      bp_presentacion: this.bp.bp_presentacion,
      bp_firma_contrato_esa: this.bp.bp_firma_contrato_esa,
      bp_kick_off: this.bp.bp_kick_off,
      bp_plan_negocios: this.bp.bp_plan_negocios,
      bp_comercial: this.bp.bp_comercial,
      bp_readiness: this.bp.bp_readiness,
      bp_com_prensa: this.bp.bp_com_prensa,
      bp_quarter_closed: this.bp.bp_quarter_closed,
      bp_dia_cadencia: this.bp.bp_dia_cadencia,
      bp_sig_pasos: this.bp.bp_sig_pasos,
      bp_cad_sem: this.bp.bp_cad_sem,
    });
  }

  insertOpp() {
    this.bpService.insertOpp(this.bp_nombre, this.oppForm.value).subscribe(
      (ans) =>
        this.msg.setMessage(`Oportunidad creada satisfactoriamente`, 'success'),
      (err) => console.log(err),
      () => {
        this.router.navigate([`/bp-detail/${this.bp_nombre}`]);
      }
    );
  }

  editBP() {
    this.bpService.updateBP(this.editBPForm.value).subscribe(
      (ans) =>
        this.msg.setMessage(
          `El BP ${this.bp_nombre} ha sido editado`,
          'success'
        ),
      (err) => console.log(err),
      () => this.router.navigate([`/bp`])
    );
  }
}
