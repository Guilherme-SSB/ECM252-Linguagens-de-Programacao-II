import { ClienteModel } from "./cliente.model";
import { Subject } from 'rxjs';

export class ClienteService {
    private clientes: ClienteModel[] = [];
    private listaClientesAtualizada = new Subject<ClienteModel[]>();

    getClientes(): ClienteModel[] {
        return [...this.clientes];
    }

    adicionarCliente(nome: string, fone: string, email: string): void {
        const cliente: ClienteModel = {
            nome, fone, email
        }
        this.clientes.push(cliente);
        this.listaClientesAtualizada.next([...this.clientes]);
    }

    getListaDeClientesAtualizada() {
        return this.listaClientesAtualizada.asObservable();
    }
}
