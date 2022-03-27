import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-step1pizza',
  templateUrl: './step1pizza.component.html',
  styleUrls: ['./step1pizza.component.css']
})
export class Step1pizzaComponent implements OnInit {

  masaSelected: string | undefined;
  masa: string[] = ['Masa tradicional', 'Masa delgada', 'Borde de queso'];

  proteinaSelected: string | undefined;
  proteina: string[] = ['Ribs', 'Pepperoni', 'Carne','Pollo','Pollo BBQ','Sin Proteina'];

  salsaSelected: string | undefined;
  salsa: string[] = ['Salsa BBQ', 'Salsa de tomate', 'Crema'];

  cantCocacola: number = 0;
  cantSprite: number = 0;

  agregado1 = false;
  agregado2 = false;
  agregado3 = false;
  agregado4 = false;
  agregado5 = false;
  agregado6 = false;
  agregado7 = false;
  agregado8 = false;

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  domicilio: boolean = false;
  retiro: boolean = false;

  cantCompra = 1;
  totalPago: number = 6990;


  constructor() { 
  }
  ngOnInit(): void {
  }

  nextStep(): void{
    if(this.step2){
      this.step2 = false;
      this.step3 = true;
    }
    if(this.step1){
      this.step1 = false;
      this.step2 = true;
    }
  }

  backStep(){
    if(this.step3){
      this.step3 = false;
      this.step2 = true;
      this.retiro = false;
      this.domicilio = false;
    }
    else{
      this.step2 = false;
      this.step1 = true;
    }
  }

  agregarCocacola(): void{
    this.cantCocacola += 1;
    this.totalPago += 1290
  }

  quitarCocacola(): void{
    if(this.cantCocacola > 0){
      this.cantCocacola -= 1;

      this.totalPago -= 1290
    }
  }

  agregarSprite(): void{
    this.cantSprite += 1;
    this.totalPago += 1290
  }

  quitarSprite(): void{
    if(this.cantSprite > 0){
      this.cantSprite -= 1;

      this.totalPago -= 1290
    }
  }

  lessTotal(): void{
    if(this.cantCompra > 1){
      this.cantCompra -= 1;
    }
  }

  plusTotal(): void{
      this.cantCompra += 1;
  }

  masaPrecio(masas: string): void{
    if(!this.masaSelected){
      this.totalPago += 2990;
    }
  }

  proteinaPrecio(proteinas: string): void{
    if(!this.proteinaSelected){
      if(proteinas != "Sin Proteina"){
        this.totalPago += 590;
      }
    }
    else{
      if(this.proteinaSelected == "Sin Proteina"){
        this.totalPago += 590;
      }
      else if(this.proteinaSelected != "Sin Proteina" && proteinas == "Sin Proteina"){
        this.totalPago -= 590;
      }
      else{}
    }
  }

  setDomicilio(){
    this.domicilio = true;
    this.step3 = true;
    this.step2 = false;
  }

  setRetiro(){
    this.retiro = true;
    this.step3 = true;
    this.step2 = false;
  }

  }
