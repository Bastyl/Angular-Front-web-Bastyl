import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarfunct',
  templateUrl: './sidebarfunct.component.html',
  styleUrls: ['./sidebarfunct.component.css']
})
export class SidebarfunctComponent implements OnInit {

  public level1: boolean = false;
  public level2: boolean = false;
  public level3: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  level1Click(){
    this.level1 = true;
    this.level2 = false;
    this.level3 = false;
    this.router.navigate(['/funct/level1']);
  }

  level2Click(){
    this.level2 = true;
    this.level1 = false;
    this.level3 = false;
    this.router.navigate(['funct/level2']);
  }

  level3Click(){
    this.level2 = false;
    this.level1 = false;
    this.level3 = true;
    this.router.navigate(['funct/level3']);
  }

}
