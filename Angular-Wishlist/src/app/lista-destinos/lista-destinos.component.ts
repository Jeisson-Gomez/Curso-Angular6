import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Input() destinos: string[];
  constructor() {
    this.destinos = ['Barcelona', 'Buenos Aires', 'Lima', 'Bogota'];
  }

  ngOnInit(): void {
  }

}
