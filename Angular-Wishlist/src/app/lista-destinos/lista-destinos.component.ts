import { Component, OnInit, Input } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Input() destinos: string[];

  constructor() {
    this.destinos = [];
  }

  ngOnInit() {}

  guardar(nombre: string, url: string): boolean{
    console.log(new DestinoViaje(nombre, url));
    return false;
  }
}
