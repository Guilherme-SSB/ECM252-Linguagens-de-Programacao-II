import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nome = "Ana"
  // idade = 17

  // lancarDado(): number {
  //   return Math.floor(Math.random() * 6) + 1;
  // }

  nome: string;
  esconderCaixa = true;
  numero: number;

  escolher(): void {
    this.numero = Math.floor(Math.random() * 100) + 1
  }

  alterarNome(event) {
    console.log(event.target.value)
    this.nome = event.target.value;
  }

  adicionar(nomeInput): void {
    this.nome = nomeInput.value;
    this.esconderCaixa = false;
  }
  
}
