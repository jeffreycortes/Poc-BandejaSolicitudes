import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  fechaSolicitud: string;
  tipoDoc: string;
  numDoc: string;
  nombres: string;
  radicado: number;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Hydrogen',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 2,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Helium',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 3,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Lithium',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 4,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Beryllium',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 5,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Boron',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 6,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Carbon',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 7,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Nitrogen',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 8,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Oxygen',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 9,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Fluorine',
    radicado: 654321,
    estado: 'En Proceso',
  },
  {
    position: 10,
    fechaSolicitud: '2020-09-01 08:10:00',
    tipoDoc: 'CC',
    numDoc: '10324..',
    nombres: 'Neon',
    radicado: 654321,
    estado: 'En Proceso',
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = [
    'No',
    'Fecha Solicitud',
    'Tipo ID',
    'ID',
    '#Radicado',
    'Nombres',
    'Estado',
    'Acciones',
  ];
  dataSource = ELEMENT_DATA;
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
