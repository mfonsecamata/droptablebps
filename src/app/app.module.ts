import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NoticeComponent } from './components/notice/notice.component';
import { RubrosComponent } from './components/rubros/rubros.component';


import {environment} from '../environments/environment';
import { HeroeListFireBaseComponent } from './components/heroe-list-fire-base/heroe-list-fire-base.component';
import { HeroeAddFireBaseComponent } from './components/heroe-add-fire-base/heroe-add-fire-base.component';

import { IncidentesService } from './services/incidentes.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    MenuComponent,
    DashboardComponent,
    HeroesComponent,
    NoticeComponent,
    RubrosComponent,
    HeroeListFireBaseComponent,
    HeroeAddFireBaseComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },{
        path: 'dashboard',
        component: DashboardComponent
      },{
        path: 'heroes',
        component: HeroesComponent
      }
      ,{
        path: 'notices',
        component: NoticeComponent
      }
      ,{
        path: 'addHeroeFireBase',
        component: HeroeAddFireBaseComponent
      },{
        path: 'listHeroeFireBase',
        component: HeroeListFireBaseComponent
      },{
        path: 'rubros',
        component: RubrosComponent
      }
    ])
  ],
  providers: [IncidentesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
