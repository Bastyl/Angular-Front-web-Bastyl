import { Component, OnInit } from '@angular/core';
import { FirstTestService } from '../../services/first-test.service'

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component implements OnInit {

  constructor(private FirstTestService: FirstTestService) { }

  ngOnInit(): void {
    this.FirstTestService.getData().subscribe(data=>{
      console.log("Esto es data: ", data)
    }, err => {
      console.log("Error ocurrido", err)
    }
    )
  
  }

}
