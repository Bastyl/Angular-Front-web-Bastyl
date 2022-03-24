import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GatoComponent } from './component/gato/gato.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FullpageComponent } from './maincomponent/fullpage/fullpage.component';
import { TitlepageComponent } from './maincomponent/titlepage/titlepage.component';
import { ContentpageComponent } from './maincomponent/contentpage/contentpage.component';
import { HomecomponentComponent } from './windowcontent/homecomponent/homecomponent.component';
import { FunctionalitiescomponentComponent } from './windowcontent/functionalitiescomponent/functionalitiescomponent.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SidebarfunctComponent } from './windowcontent/sidebarfunct/sidebarfunct.component';
import { BulbasaurmainComponent } from './component/bulbasaur/bulbasaurmain/bulbasaurmain.component';
import { BulbasaursecondComponent } from './component/bulbasaur/bulbasaursecond/bulbasaursecond.component';
import { BookformComponent } from './component/bookform/bookform.component';
import { Step1pizzaComponent } from './component/pizzaform/step1pizza/step1pizza.component';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    GatoComponent,
    FullpageComponent,
    TitlepageComponent,
    ContentpageComponent,
    HomecomponentComponent,
    FunctionalitiescomponentComponent,
    SidebarfunctComponent,
    BulbasaurmainComponent,
    BulbasaursecondComponent,
    BookformComponent,
    Step1pizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
