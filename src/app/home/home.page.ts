import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  onClickUserDetail(){
    this.router.navigate(["/second-page"])
  }

  onClickSlider(){
    this.router.navigate(["/slider"])
  }

  onClickSearch(){
    this.router.navigate(["/search"])
  }

  onClickActionSheet(){
    this.router.navigate(["/action-sheet"])
  }

  onClickIonMenu(){
    this.router.navigate(["/menu"])
  }
  
}
