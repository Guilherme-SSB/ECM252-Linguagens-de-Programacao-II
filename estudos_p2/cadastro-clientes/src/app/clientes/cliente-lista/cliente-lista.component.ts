import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ClienteModel } from '../cliente.model';
import { ClienteService } from '../cliente.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit, OnDestroy {

  clientes: ClienteModel[] = [];
  private clientesSubscription: Subscription;

  // Injeção de dependência
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
    this.clientesSubscription = this.clienteService.getListaDeClientesAtualizada().subscribe((clientes: ClienteModel[]) => {
      this.clientes = clientes;
    })
  }

  ngOnDestroy(): void {
    this.clientesSubscription.unsubscribe();
  }

}
