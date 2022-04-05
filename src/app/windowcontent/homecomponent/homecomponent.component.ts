import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  images = ["./../../../assets/images/angular.png","./../../../assets/images/netcore.png","./../../../assets/images/mongodblogo.png"];
  actualImage: string;
  changeBackgroundCounter = 0;

  constructor() { }

  ngOnInit(): void {
    this.actualImage = this.images[0];
    setInterval(() => {
      this.changeBackgroundCounter++;
      console.log(this.changeBackgroundCounter);
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter];
      console.log(this.actualImage)
    }, 5000);
  }

  scroll(id: any) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }

  getImage(){
    this.actualImage = this.images[0];
    setInterval(() => {
      this.changeBackgroundCounter++;
      console.log(this.changeBackgroundCounter);
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter];
      console.log(this.actualImage)
    }, 5000);
    console.log(this.actualImage)
    return this.actualImage;
  }

}
