import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { PizzaserviceService } from 'src/app/services/pizzaservice.service';

@Component({
  selector: 'app-step1pizza',
  templateUrl: './step1pizza.component.html',
  styleUrls: ['./step1pizza.component.css']
})
export class Step1pizzaComponent implements OnInit {

  nombrePersona: string;
  apellidoPersona: string;
  celular: string;
  direccion: string;
  nota: string;

  masaSelected: string;
  masa: string[] = ['Masa tradicional', 'Masa delgada', 'Borde de queso'];

  proteinaSelected: string;
  proteina: string[] = ['Ribs', 'Pepperoni', 'Carne','Pollo','Pollo BBQ','Sin Proteina'];

  salsaSelected: string;
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

  agregados: string[] = ["iniciador"];
  tipo: string;

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  domicilio: boolean = false;
  retiro: boolean = false;

  cantCompra = 1;
  totalPago: number = 6990;

  validatorMasa = false;
  validatorSalsa = false;
  validatorProteina = false;

  constructor(private PizzaService: PizzaserviceService) { 
  }
  ngOnInit(): void {

  }

  nextStep(): void{
    if(this.step2){
      this.step2 = false;
      this.step3 = true;
    }
    if(this.step1){
      if(this.masaSelected == undefined){
        this.validatorMasa = true;
      }else{
        this.validatorMasa = false;
      }

      if(this.salsaSelected == undefined){
        this.validatorSalsa = true;
      }else{
        this.validatorSalsa = false;
      }

      if(this.proteinaSelected == undefined){
        this.validatorProteina = true;
      }else{
        this.validatorProteina = false;
      }

      if(this.masaSelected != undefined && this.salsaSelected != undefined && this.proteinaSelected != undefined){
        this.step1 = false;
        this.step2 = true;
      }
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

  guardarPedido(){
    if(this.nombrePersona != undefined && this.apellidoPersona != undefined && this.direccion != undefined && this.celular != undefined){
      this.agregados.pop();
      if(this.agregado1){
        this.agregados.push("Tomate Cherry")
      }
      if(this.agregado2){
        this.agregados.push("Jamon Cortado")
      }
      if(this.agregado3){
        this.agregados.push("Pimenton Verde")
      }
      if(this.agregado4){
        this.agregados.push("Cebolla Morada")
      }
      if(this.agregado5){
        this.agregados.push("Champiñones")
      }
      if(this.agregado6){
        this.agregados.push("Choclo")
      }
      if(this.agregado7){
        this.agregados.push("Piña en Cubos")
      }
      if(this.agregado8){
        this.agregados.push("Queso Parmesano")
      }
  
      if(this.domicilio){
        this.tipo = "Domicilio";
      }else{
        this.tipo = "Retiro Local";
      }

      if(this.nota == undefined){
        this.nota = "";
      }
      this.PizzaService.addData(
      this.nombrePersona,
      this.apellidoPersona,
      this.direccion,
      this.celular,
      this.nota,
      this.masaSelected,
      this.proteinaSelected,
      this.salsaSelected,
      this.cantCocacola,
      this.cantSprite,
      this.agregados,
      this.tipo,
      this.cantCompra,
      this.totalPago).subscribe(data =>{
        console.log(data)
      },err=>{
        console.log(err)
      })
    }


  }

  }


