import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit(){
    this.cargarLoading('Bienvenido pasajero!!');
    console.log('ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  cargarLoading(message:string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }
}
