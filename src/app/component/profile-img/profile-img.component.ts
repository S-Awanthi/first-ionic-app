import { userList } from './../../api/dummyJSON/dummyJSON';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss'],
})
export class ProfileImgComponent implements OnInit {
 
  // Variables
  public dummyUserList: any;

  constructor() { 
    // this.dummyUserList = userList
  }

  ngOnInit() {
    this.dummyUserList=userList;
    console.log(this.dummyUserList)
  }

}
