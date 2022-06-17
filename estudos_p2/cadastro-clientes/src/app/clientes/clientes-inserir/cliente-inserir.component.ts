import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
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

    onAdicionarCliente(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const cliente: ClienteModel = {
            nome: form.value.nome,
            fone: form.value.fone,
            email: form.value.email
        }
        this.clienteAdicionado.emit(cliente);
    }
}
