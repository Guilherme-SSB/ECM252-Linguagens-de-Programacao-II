import { Component, EventEmitter, Output } from "@angular/core";
import { ClienteModel } from "../cliente.model";

@Component({
    selector: 'app-cliente-inserir',
    templateUrl: './cliente-inserir.component.html',
    styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent {

    @Output()
    clienteAdicionado = new EventEmitter<ClienteModel>();

    nome: string;
    fone: string;
    email: string;

    onAdicionarCliente() {
        const cliente: ClienteModel = {
            nome: this.nome,
            fone: this.fone,
            email: this.email
        }
        this.clienteAdicionado.emit(cliente);
    }
}
