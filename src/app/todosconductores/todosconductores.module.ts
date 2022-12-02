import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosconductoresPageRoutingModule } from './todosconductores-routing.module';

import { TodosconductoresPage } from './todosconductores.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TodosconductoresPageRoutingModule
  ],
  declarations: [TodosconductoresPage]
})
export class TodosconductoresPageModule {}
