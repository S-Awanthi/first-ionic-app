import { sampleData } from './../api/dummyJSON/dummyJSON';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {

  public sampleDataList: any;

  constructor(private router: Router) {
    this.sampleDataList = sampleData;
    console.log(this.sampleDataList)
  }

  ngOnInit() {
    
  }

  onClick(){
    this.router.navigate(["/home"])
  }

}
