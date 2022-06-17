import { ClienteModel } from "./cliente.model";

export class ClienteService {
    private clientes: ClienteModel[] = [];

    getClientes(): ClienteModel[] {
        return [...this.clientes];
    }

    adicionarCliente(nome: string, fone: string, email: string): void {
        const cliente: ClienteModel = {
            nome, fone, email
        }
        this.clientes.push(cliente);
    }
}