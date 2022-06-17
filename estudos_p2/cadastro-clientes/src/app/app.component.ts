import { Component } from '@angular/core';
import { ClienteModel } from './clientes/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes: ClienteModel[] = [];

  onClienteAdicionado(cliente: ClienteModel) {
    this.clientes = [cliente, ...this.clientes];
  }
}
