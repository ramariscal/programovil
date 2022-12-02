import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.scss'],
})
export class ConductoresComponent implements OnInit {

  todos: Conductor[] = [];

  datos: Conductor = {
      conductor: {
        nombre: '',
        apellido: '',
        apodo: '',
        modelo: '',
        id: '',
      }
  }

  constructor(
    private database: FirestoreService,
    private datastore: FirestoreService,
    private interaction: InteractionService) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.database.getCollection<Conductor>('Conductores').subscribe( res  => {
      console.log('Esta es la lectura', res);
      this.todos = res;
    })
  }

  AgregarConductor() {
    this.interaction.presentLoading('Guardando...')
    const path = 'Conductores';
    const id = this.datastore.getId();
    this.datos.conductor.id = id;
    this.datastore.createDoc(this.datos, path, id).then( (res) => {
      console.log('Guardado con exito');
      this.interaction.closeLoading();
      this.interaction.presentToast('Guardado con exito')
    })
  }
}
