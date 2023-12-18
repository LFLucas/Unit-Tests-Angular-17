import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banking-app',
  templateUrl: './banking-app.component.html',
  styleUrl: './banking-app.component.css'
})
export class BankingAppComponent implements OnInit{ 
  public title: string = 'unit-tests'
  public nome?: string

  private cCorrente: number = 100
  private cCarteira: number = 100
  
  constructor(){}
  
  ngOnInit(): void { this.nome = (prompt() || "") }

  get contaCorrente(){ return this.cCorrente }
  get clienteCarteira(){ return this.cCarteira }

  set depositar(valor:string){
    let v = parseFloat(valor)
    if(v > this.clienteCarteira || isNaN(v)) { return }
    this.cCarteira -= v
    this.cCorrente += v
  }
  
  set sacar(valor:string){
    let v = parseFloat(valor)
    if(v > this.contaCorrente || isNaN(v)) { return }  
    this.cCorrente -= v
    this.cCarteira += v
  }
}
