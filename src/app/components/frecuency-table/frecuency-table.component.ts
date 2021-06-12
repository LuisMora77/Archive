import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  Frecuency: string;
  Type: string;
  LastApplication: Date;
  NextApplication: Date;
}


@Component({
  selector: 'app-frecuency-table',
  templateUrl: './frecuency-table.component.html',
  styleUrls: ['./frecuency-table.component.scss']
})
export class FrecuencyTableComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Frecuency', 'Type', 'LastApplication','NextApplication'];
  //dataSource = ELEMENT_DATA;
  date1 : Date = new Date('06/08/2021');
  date2: Date = new Date(this.date1.valueOf());
  date3: Date = new Date(this.date2.setMonth(this.date2.getMonth()+3));

  dataSource: PeriodicElement[] = [
    {Name: 'Bitácora', Frecuency: 'Trimestral', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Tareas por Lotes', Frecuency: 'Trimestral', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Retail', Frecuency: 'Trimestral', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Balanceos', Frecuency: 'Trimestral', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Liquidaciones', Frecuency: 'Trimestral', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Solicitudes de Autorización', Frecuency: 'Trimestral', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Órdenes de Venta', Frecuency: 'Trimestral', Type: 'IMDF', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Diario de Facturas', Frecuency: 'Trimestral', Type: 'IMDF', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Contabilidad General', Frecuency: 'Anual', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3},
    {Name: 'Inventarios', Frecuency: 'Por Definir', Type: 'SQL', LastApplication: this.date1 ,NextApplication: this.date3}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
