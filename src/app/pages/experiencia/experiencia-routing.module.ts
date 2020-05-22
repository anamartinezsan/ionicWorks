import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienciaPage } from './experiencia.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienciaPageRoutingModule {}
