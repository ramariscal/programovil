import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'envianos un mensaje',
      inputs: [
        {
          name:'name',
          type:'text',
          placeholder: 'nombre'
        },
        {
          name: 'name2',
          type:'text',
          id:'name2-id',
          placeholder: 'apellido (max 15 characters)',
          attributes: {
            maxlength: 15,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        // Colocar fecha con un mínimo y máximo
        {
          name:'date',
          type:'date',
          min:'1980-03-01',
          max:'2025-01-12'

        },
        //correo
        {
          name:'email',
          type:'email',
          placeholder:'seba.hurtado@duocuc.cl'
        },

        {
          type: 'textarea',
          placeholder: 'Envianos tu mensaje',
        },
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel',
          cssClass:'secondary',
          handler: () => {
            console.log ('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler:( data:any) =>{
            console.log(data) //con esto nosotros guardamos los datos si la persona apreta OK
          }
        }
      ]
    });

    await alert.present();
  }

}
