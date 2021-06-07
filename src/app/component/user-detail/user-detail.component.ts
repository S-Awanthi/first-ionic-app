import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  // catching for loop data
  @Input('fromParentData') fromParentData: any;

  //Emitting from component
  @Output() itemFromComponent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("Inside component", this.fromParentData)
  }

  onClick(foodType:string){
    console.log(foodType)
    this.itemFromComponent.emit(foodType)
  }
}
