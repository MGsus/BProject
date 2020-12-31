import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BpService } from '../services/bp.service';

@Component({
  selector: 'new-bp',
  templateUrl: './new-bp.component.html',
  styleUrls: ['./new-bp.component.scss'],
})
export class NewBPComponent implements OnInit {
  newBPForm: FormGroup;
  bp_nombre = new FormControl('');
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bpService: BpService
  ) {}

  ngOnInit(): void {
    this.newBPForm = this.formBuilder.group({
      bp_nombre: this.bp_nombre,
      bp_perfilamiento: this.bp_perfilamiento,
      bp_tipo: this.bp_tipo,
      bp_fecha_inicio: this.bp_fecha_inicio,
      bp_fecha_fin: this.bp_fecha_fin,
      bp_presentacion: this.bp_presentacion,
      bp_firma_contrato_esa: this.bp_firma_contrato_esa,
      bp_kick_off: this.bp_kick_off,
      bp_plan_negocios: this.bp_plan_negocios,
      bp_comercial: this.bp_comercial,
      bp_readiness: this.bp_readiness,
      bp_com_prensa: this.bp_com_prensa,
      bp_quarter_closed: this.bp_quarter_closed,
      bp_dia_cadencia: this.bp_dia_cadencia,
      bp_sig_pasos: this.bp_sig_pasos,
      bp_cad_sem: this.bp_cad_sem,
    });
  }

  newBP() {
    this.bpService.newBP(this.newBPForm.value).subscribe(
      (ans: any) => console.log('bp creado correctamente'),
      (err: any) => console.error(err),
      () => {
        this.router.navigate([`/bp`]);
      }
    );
  }
}
