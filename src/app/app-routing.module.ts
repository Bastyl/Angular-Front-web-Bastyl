import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './component/componente1/componente1.component';
import { Juego2Component } from './component/juego2/juego2.component';

const routes: Routes = [
  {
    path: 'level1',
    component: Componente1Component,
  },
  {
    path: 'level2',
    component: Juego2Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
