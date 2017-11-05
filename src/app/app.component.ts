import { Component } from '@angular/core';
import { HeroeService } from './services/heroe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private heroeService: HeroeService) { this.heroeService.insertar()}

  }
