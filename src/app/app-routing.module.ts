import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './windowcontent/homecomponent/homecomponent.component';
import { FunctionalitiescomponentComponent } from './windowcontent/functionalitiescomponent/functionalitiescomponent.component';
import { Componente1Component} from './component/componente1/componente1.component';
import { Juego2Component} from './component/juego2/juego2.component';
/*
const routes: Routes = [
  {
    path: 'home',
    component: HomecomponentComponent,
  },
  {
    path: 'funct',
    component: FunctionalitiescomponentComponent,
  },
  {
    path: 'funct/level1',
    component: Componente1Component,
  },
];*/

const routes: Routes = [
  {
    path: 'home',
    component: HomecomponentComponent,
  },
  {
    path: 'funct',
    component: FunctionalitiescomponentComponent,
    children: [{
      path: 'level1',
      component: Componente1Component,
    },
    {
      path: 'level2',
      component: Juego2Component,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
