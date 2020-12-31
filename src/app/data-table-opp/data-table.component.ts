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
  selector: 'app-data-table-opp',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableOppComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;
  @Input() dataFlow: DataTableItem[];

  constructor(private router: Router) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'Numero',
    'Nombre',
    'BP',
    'SS',
    'Fecha',
    'Q',
    'Semana',
    'Monto',
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

  editOpp(name: string, opp: string) {
    this.router.navigate(['/edit-opp/'], {
      queryParams: { name: name, opp: opp },
    });
  }
}
