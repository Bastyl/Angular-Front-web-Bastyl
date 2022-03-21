import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public level1: boolean = false;
  public level2: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  level1Click(){
    this.level1 = true;
    this.level2 = false;
    this.router.navigate(['/funct/level1']);
  }

  level2Click(){
    this.level2 = true;
    this.level1 = false;
    this.router.navigate(['funct/level2']);
  }

 
}
