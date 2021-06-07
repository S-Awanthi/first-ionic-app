import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheet: ActionSheetController, private router: Router) {}    

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(["/home"])
  }

  async _actionSheet(){

    //Object creation
    const actionSheetConst = await this.actionSheet.create({
      header: "Select Action",
      // subHeader: "Select Action",
      cssClass: "my-custom-class",    //Custom css available in global.scss file
      animated: true,
      translucent: false,
      backdropDismiss: false,
      mode: "md",
      
      buttons:[
        {
          text: "Camera",
          icon: "camera",
          // Handler to assign a function
          handler: () => {
            console.log("Camera Clicked")
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: 'caret-forward-circle',          
          role: "selected",
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
  })

  actionSheetConst.present()

  actionSheetConst.onDidDismiss().then(()=>{
    console.log("onDidDismiss")
  })


  // console.log("Action Sheet")
  }

}
