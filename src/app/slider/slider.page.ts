import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  public slideOpts = {
    initialSlide: 0,
    speed: 100,
    // pager: true,
    direction: 'horizontal',
    nested: true,
    // slidesPerView: 1
  }

  //variable in footer
  public footer_text: string = "Skip"

  // decorator for slide (passing id #slide) and import ionic slides to slides variable
  @ViewChild('slides', {static:false}) slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(["/home"])
  }

  onClickskip(){
    this.router.navigate(["/home"])
  }

  ionSlideDidChange(event){
    // console.log("ionSlideDidChange", event)
    // Get active index when slide change using slides variable
    this.slides.getActiveIndex().then(index => {
      console.log(index)
      index==2 ? this.footer_text = "Go to Home": this.footer_text= "Skip"
    })
  }

}
