//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RubrosComponent } from './components/rubros/rubros.component';
import { PatologiasComponent } from './components/patologias/patologias.component';

//Otros
import {environment} from '../environments/environment';
import { HeroeListFireBaseComponent } from './components/heroe-list-fire-base/heroe-list-fire-base.component';
import { HeroeAddFireBaseComponent } from './components/heroe-add-fire-base/heroe-add-fire-base.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { GoogleMapJavascriptComponent } from './components/google-map-javascript/google-map-javascript.component';


//Servicios
import { IncidentesService } from './services/incidentes.service';
import { GraficBarcharComponent } from './components/grafic-barchar/grafic-barchar.component';
import { GraficaPiechartComponent } from './components/grafica-piechart/grafica-piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    MenuComponent,
    DashboardComponent,
    HeroesComponent,
    NoticeComponent,
    AddHeroeComponent,
    HeroeListFireBaseComponent,
    HeroeAddFireBaseComponent,
    GoogleMapComponent,
    GoogleMapJavascriptComponent
    RubrosComponent,    
    GraficBarcharComponent, 
    GraficaPiechartComponent,    
    RubrosComponent,
    PatologiasComponent,
    GraficBarcharComponent, 
    GraficaPiechartComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkmTic0g0TLUmDaMeqXIxbf19Xi1zQB24'
    }),
    ChartsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },{
        path: 'dashboard',
        component: DashboardComponent
      },{
        path: 'rubros',
        component: RubrosComponent
      },{
        path: 'listHeroeFireBase',
        component: HeroeListFireBaseComponent
      },{
        path: 'googleMap',
        component: GoogleMapComponent},{
        path: 'patologias',
        component: PatologiasComponent
      }
    ])
  ],
  providers: [IncidentesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
