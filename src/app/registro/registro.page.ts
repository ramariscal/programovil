import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, private alertCtrl: AlertController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmarContraseña': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {}


    /*async presentAlert() {
      var f = this.formularioRegistro.value;
      if(this.formularioRegistro.invalid){
        const alert = await this.alertCtrl.create({
          header: 'Alert',
          message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
        return;
      }
      
    }*/
}
