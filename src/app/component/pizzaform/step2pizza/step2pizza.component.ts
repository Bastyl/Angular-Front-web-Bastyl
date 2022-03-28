import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2pizza',
  templateUrl: './step2pizza.component.html',
  styleUrls: ['./step2pizza.component.css']
})
export class Step2pizzaComponent implements OnInit {
  panelOpenState = false;
  value = [1,2,3,4,5];

  boleta =     [{
    "id": "623a7bd9ca699374f1de1658",
    "Masa": "Masa tradicional",
    "Proteina": "Carne",
    "Agregados": ["Jamon Cortado", "Pimenton Verde", "Cebolla Morada", "Choclo"],
    "Salsa": "Salsa BBQ",
    "Cocacola": 3,
    "Sprite": 1,
    "Cantidad": 1,
    "Tipo": "Domicilio",
    "Nombre": "Bastian",
    "Apellido": "Lopez",
    "Direccion": "Avenida la florida 9650 casa 23",
    "Celular": 933736001,
    "Nota": "Pago con billete de 10 mil",
    "Fecha": "03-02-2022",
    "Monto": 31950
},
{
  "id": "623a7bd9ca699374f1de1658",
  "Masa": "Masa Normal",
  "Proteina": "Pollo",
  "Agregados": ["Jamon Cortado", "Pimenton Verde", "Cebolla Morada", "Choclo"],
  "Salsa": "Crema",
  "Cocacola": 0,
  "Sprite": 2,
  "Cantidad": 2,
  "Tipo": "Domicilio",
  "Nombre": "Agustin",
  "Apellido": "Orellana",
  "Direccion": "Avenida Macul 4543",
  "Celular": 933736001,
  "Nota": "Recibe mi hermano bastian",
  "Fecha": "04-02-2022",
  "Monto": 25490
}]
  constructor() { }

  ngOnInit(): void {
  }

}
