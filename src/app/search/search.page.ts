import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  public list: Array<Object> = [];
  public searchedItem: any;

  constructor(private router: Router) {
    this.list = [
      { title: "Foods" },
      { title: "Dresses - 65D45" },
      { title: "Vehicles" },
      { title: "Tokens" },
      { title: "Books" },
      { title: "Mobile Phones" },
      { title: "Chairs" },
      { title: "Tables - 123" },
      { title: "Laptops" }
    ];
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  _ionChange(event){
    // console.log(event.detail.value)
    const val = event.target.value;
    this.searchedItem = this.list;

    if(val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onClick(){
    this.router.navigate(["/home"])
  }

}