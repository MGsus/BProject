import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BpService } from '../services/bp.service';
import { User } from '../shared/models/user.model';
import { MsgComponent } from '../shared/msg/msg.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.scss'],
})
export class BpComponent implements OnInit {
  data: any;
  isText: boolean = false;
  isLoading: boolean = false;
  user: User;

  constructor(
    private bpService: BpService,
    private authService: AuthService,
    public msg: MsgComponent,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getUserInfo();
    this.bpService.getBps().subscribe(
      (ans) => (this.data = ans),
      (err) => console.error(err),
      () => {
        this.isText = true;
        this.isLoading = false;
        const fechaActual = new Date();

        this.data.forEach((item: any) => {
          const fechaFin = new Date(item.bp_fecha_fin);
          const dias = fechaActual.getDate() - fechaFin.getDate();

          switch (true) {
            case 7 < dias && dias < 14:
              this._snackBar.open(
                `La Fecha Fin del BP ${item.bp_nombre} está próxima. Faltan ${
                  fechaActual.getDate() - fechaFin.getDate()
                } día(s)`,
                'Cerrar',
                {
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                }
              );

              break;
            case 0 < dias && dias <= 7:
              this._snackBar.open(
                `La Fecha Fin del BP ${
                  item.bp_nombre
                } es en menos de 7 dias. Faltan ${
                  fechaActual.getDate() - fechaFin.getDate()
                } día(s)`,
                'Cerrar',
                {
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                }
              );
              break;
            case dias < 0:
              this._snackBar.open(
                `La Fecha Fin del BP ${item.bp_nombre} se ha cumplido. Por favor actualizar la información`,
                'Cerrar',
                {
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                }
              );
              break;
            default:
              // console.log(dias);
              break;
          }
        });
      }
    );
  }

  getUserInfo() {
    this.authService.isAuth().subscribe((ans) => (this.user = ans));
  }
}
