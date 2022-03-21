import { Component, OnInit } from '@angular/core';
import { FirstTestService } from '../../services/first-test.service';
import {AfterViewInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})

export class Juego2Component implements OnInit, AfterViewInit {


  constructor(private FirstTestService: FirstTestService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }


}


