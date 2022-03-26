import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-step1pizza',
  templateUrl: './step1pizza.component.html',
  styleUrls: ['./step1pizza.component.css']
})
export class Step1pizzaComponent implements OnInit {

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

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

  cantCompra = 1;
  totalPago: number = 6990;

  checked = false ;
  indeterminate = false;

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

  agregarCocacola(): void{
    this.cantCocacola += 1;
  }

  quitarCocacola(): void{
    if(this.cantCocacola > 0){
      this.cantCocacola -= 1;
    }
  }

  agregarSprite(): void{
    this.cantSprite += 1;
  }

  quitarSprite(): void{
    if(this.cantSprite > 0){
      this.cantSprite -= 1;
    }
  }

  }
