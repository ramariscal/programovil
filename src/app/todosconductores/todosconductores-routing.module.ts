import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosconductoresPage } from './todosconductores.page';

const routes: Routes = [
  {
    path: '',
    component: TodosconductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosconductoresPageRoutingModule {}
