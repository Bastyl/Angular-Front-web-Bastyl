import { Component, OnInit } from '@angular/core';
import { FirstTestService } from '../../services/first-test.service'

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css']
})
export class MainwindowComponent implements OnInit {

  constructor(private FirstTestService: FirstTestService) { }

  ngOnInit(): void {
    this.FirstTestService.getData().subscribe(data=>{
      console.log("Esto es data: ", data)
      console.log("Esto es data: ", data)
    }, err => {
      console.log("Error ocurrido", err)
    }
    )
  }

}
