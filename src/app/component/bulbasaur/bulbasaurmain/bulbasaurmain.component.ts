import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulbasaurmain',
  templateUrl: './bulbasaurmain.component.html',
  styleUrls: ['./bulbasaurmain.component.css']
})
export class BulbasaurmainComponent implements OnInit {

  color_white: boolean = true;
  color_blue: boolean = false;
  color_red: boolean = false;
  color_yellow: boolean = false;
  color_green: boolean = false;

  limpiar_pizarra: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  whiteSelected(){
    this.color_white = true;
    this.color_blue = false;
    this.color_red = false;
    this.color_yellow = false;
    this.color_green = false;
    this.limpiar_pizarra = false;

  }
  blueSelected(){
    this.color_white = false;
    this.color_blue = true;
    this.color_red = false;
    this.color_yellow = false;
    this.color_green = false;
    this.limpiar_pizarra = false;

  }
  redSelected(){
    this.color_white = false;
    this.color_blue = false;
    this.color_red = true;
    this.color_yellow = false;
    this.color_green = false;
    this.limpiar_pizarra = false;

  }
  yellowSelected(){
    this.color_white = false;
    this.color_blue = false;
    this.color_red = false;
    this.color_yellow = true;
    this.color_green = false;
    this.limpiar_pizarra = false;

  }
  greenSelected(){
    this.color_white = false;
    this.color_blue = false;
    this.color_red = false;
    this.color_yellow = false;
    this.color_green = true;
    this.limpiar_pizarra = false;

  }

  limpiarPizarra(){
    this.limpiar_pizarra = true;
    this.color_white = false;
    this.color_blue = false;
    this.color_red = false;
    this.color_yellow = false;
    this.color_green = false;
  }

}
