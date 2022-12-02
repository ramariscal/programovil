import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  pageTitle = 'home';
  isNotHome = false;

  constructor() { }
  
  option = {
    slidesPerview: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    
  }
}
