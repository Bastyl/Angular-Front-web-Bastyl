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
  
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

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

  }
