import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step0pizza',
  templateUrl: './step0pizza.component.html',
  styleUrls: ['./step0pizza.component.css']
})
export class Step0pizzaComponent implements OnInit {

  opcionPedido = false;
  opcionBoleta = false;

  constructor() { }

  ngOnInit(): void {
    var date = new Date;
    var date_text = date.toLocaleString().split(",")
    console.log(date_text[0],"esto es date");
  }

  hacerPedido(){
    this.opcionBoleta = false;
    this.opcionPedido = true;
  }

  verBoletas(){
    this.opcionPedido = false;
    this.opcionBoleta = true;
  }

  volverInicio(){
    this.opcionBoleta = false;
    this.opcionPedido = false;
  }

}
