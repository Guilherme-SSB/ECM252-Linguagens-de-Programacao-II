import { Component, Input, OnInit } from '@angular/core';
import { ClienteModel } from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  @Input()
  clientes: ClienteModel[] = [
    {
      nome: 'José',
      fone: '123456789',
      email: 'jose@email.com'
    },
    {
      nome: 'Maria',
      fone: '123456789',
      email: 'maria@email.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
