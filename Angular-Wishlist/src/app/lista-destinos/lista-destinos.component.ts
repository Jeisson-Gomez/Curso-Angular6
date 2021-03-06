import { Component, OnInit, Input } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Input() destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
  }

  ngOnInit() {}

  guardar(nombre: string, url: string): boolean{
    this.destinos.push(new DestinoViaje(nombre, url));
    return false;
  }

  elegido(d: DestinoViaje){
    this.destinos.forEach(function (x) {x.setSelected(false); });
    d.setSelected(true);
  }
}
