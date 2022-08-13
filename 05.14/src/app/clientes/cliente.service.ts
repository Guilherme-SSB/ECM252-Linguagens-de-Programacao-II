import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cliente } from "./cliente.model";

@Injectable({providedIn: 'root'})
export class ClienteService {
    private clientes: Cliente[] = [];
    private listaClientesAtualizada = new Subject<Cliente[]>();

    adicionarCliente(nome: string, fone: string, email: string) {
        const cliente: Cliente = {
            nome: nome,
            fone: fone,
            email: email,
        };
        this.clientes.push(cliente);
        this.listaClientesAtualizada.next([...this.clientes]);
    }

    getClientes(): Cliente[] {
        return [...this.clientes];
    }
}