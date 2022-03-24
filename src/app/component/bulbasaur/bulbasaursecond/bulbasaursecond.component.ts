import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bulbasaursecond',
  templateUrl: './bulbasaursecond.component.html',
  styleUrls: ['./bulbasaursecond.component.css']
})
export class BulbasaursecondComponent implements OnInit, OnChanges {

  @Input() public whiteInput: boolean = false;
  @Input() public blueInput: boolean = false;
  @Input() public redInput: boolean = false;
  @Input() public yellowInput: boolean = false;
  @Input() public greenInput: boolean = false;

  @Input() public limpiarInput: boolean = false;

  set_color: boolean = false;

  color_white_box: boolean = true;
  color_blue_box: boolean = false;
  color_red_box: boolean = false;
  color_yellow_box: boolean = false;
  color_green_box: boolean = false;

  limpiar_box: boolean = false;


  constructor() { }
  ngOnChanges(): void {
    if(this.limpiarInput){
      this.color_white_box = true;
      this.color_blue_box = false;
      this.color_red_box = false;
      this.color_yellow_box = false;
      this.color_green_box = false;
    }
  }

  ngOnInit(): void {
  }


  changeColorBox(){
    if(this.whiteInput){
      this.color_white_box = true;
      this.color_blue_box = false;
      this.color_red_box = false;
      this.color_yellow_box = false;
      this.color_green_box = false;

    }
    if(this.blueInput){
      this.color_white_box = false;
      this.color_blue_box = true;
      this.color_red_box = false;
      this.color_yellow_box = false;
      this.color_green_box = false;

    }  
    if(this.redInput){
      this.color_white_box = false;
      this.color_blue_box = false;
      this.color_red_box = true;
      this.color_yellow_box = false;
      this.color_green_box = false;

    }  
    if(this.yellowInput){
      this.color_white_box = false;
      this.color_blue_box = false;
      this.color_red_box = false;
      this.color_yellow_box = true;
      this.color_green_box = false;

    }  
    if(this.greenInput){
      this.color_white_box = false;
      this.color_blue_box = false;
      this.color_red_box = false;
      this.color_yellow_box = false;
      this.color_green_box = true;

    }
  }
}
