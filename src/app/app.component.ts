import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // variable or array of objects for side menu list
  // public sideMenuList: Array<Object>;
  public sideMenuList: any;

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    private menu: MenuController
  ) {
    // this.initializeApp();
    this.sideMenuList = [
      {
        title: "Profile",
        icon: "person"
      },
      {
        title: "Inbox",
        icon: "mail"
      },
      {
        title: "Outbox",
        icon: "paper-plane"
      },
      {
        title: "Archived",
        icon: "archive"
      },
      {
        title: "Spam",
        icon: "warning"
      },
      {
        title: "Trash",
        icon: "trash"
      },
      {
        title: "Favourites",
        icon: "heart"
      },
      {
        title: "My Cart",
        icon: "cart"
      },
      {
        title: "Payments",
        icon: "card"
      },
    ]
  }

  // initializeApp(){
  //   this.platform.ready().then(() -> {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }

  onMenuClick(item: String){
    console.log(item + " Clicked")
    this.menu.close()
  }

  _ionDidOpen(event: any){
    // console.log("ionDidOpen" + event)

    console.log(this.menu.open)

    this.menu.isOpen().then(() => {
      console.log("Menu Opened")            
    })
  }

  _ionWillClose(event: any){
    console.log(this.menu.open)

    this.menu.isOpen().then(() => {
      console.log("Menu Closed")            
    })
  }
}
