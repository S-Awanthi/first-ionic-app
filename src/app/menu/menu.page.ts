import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(["/home"])
  }

  _openSideMenu(){
    // Pass the menuId from app.component.html
    this.menu.enable(true, "menu-content")
    this.menu.open("menu-content")
  }

}
