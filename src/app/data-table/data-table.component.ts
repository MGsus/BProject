import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;
  @Input() dataFlow: DataTableItem[];

  constructor(private router: Router) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'Nombre',
    'Tipo',
    'Perfilamiento',

    'Fecha Inicio',
    'Fecha Fin',
    'Presentacion',
    'Contrato ESA',
    'Kick Off',
    'Plan',
    'Comercial',
    'BP Readiness',
    'Com Prensa',
    'Dia Cadencia',
    'Sig Pasos',
    'Opciones',
  ];

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.dataFlow);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  bpDetail(name: string) {
    this.router.navigate([`/bp-detail/${name}`]);
  }
}
