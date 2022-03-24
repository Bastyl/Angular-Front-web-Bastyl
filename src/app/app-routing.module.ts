import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './windowcontent/homecomponent/homecomponent.component';
import { FunctionalitiescomponentComponent } from './windowcontent/functionalitiescomponent/functionalitiescomponent.component';
import { BulbasaurmainComponent} from './component/bulbasaur/bulbasaurmain/bulbasaurmain.component';
import { BookformComponent} from './component/bookform/bookform.component';
import {Step1pizzaComponent } from './component/pizzaform/step1pizza/step1pizza.component'

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
      component: BulbasaurmainComponent,
    },
    {
      path: 'level2',
      component: BookformComponent,
    },
    {
      path: 'level3',
      component: Step1pizzaComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
