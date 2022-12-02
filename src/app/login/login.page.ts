import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  user : any = {
    email: '',
    password:''
  }

  field: string = '';

  constructor(public fb: FormBuilder, private toastCtrl: ToastController, private router: Router) {

    
    

    /*
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
    */

   }
   ngOnInit() {}

   login(){
    if(this.validateModel(this.user)){
      this.router.navigate(['/home']);
      if(this.user.email == 'seba@admin.cl'){
        this.presentToast('Bienvenido Administrador');
      }
      else{
        this.presentToast('Bienvenido ' + this.user.email);
      }
    }
    else{
      this.presentToast('Debe ingresar sus datos correctamente');
    }
  }
  
  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000
    });
    toast.present();
  }

  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(this.user.email == 'seba@admin.com' && this.user.password == '11abril' || this.user.email == 'usuario@gmail.com' && this.user.password == '11abril'){
        this.field = key;
        return true;
      }
    }
    return false;
  }



  
}
