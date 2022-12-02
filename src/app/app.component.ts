import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sobre nosotros', url: '/about', icon: 'heart' },
    { title: 'Coversor', url: '/coversor', icon: 'build' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Convertidor', url: '/convertidor', icon: 'wallet' },
    { title: 'Conductores', url: '/personas', icon: 'person' },
    { title: 'Cerrar Sesion', url: '/login', icon: 'close' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
