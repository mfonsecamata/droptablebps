import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import { Heroe } from '../../services/heroe';
import { HeroeService } from '../../services/heroe.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroeService]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  hoeroelist : AngularFireList<Heroe>; 
  
  selectedHero: Heroe;

  

  constructor(private heroeService: HeroeService) { }

  getHeroes(): void {
    this.heroeService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
    this.heroeService.getData();

    this.heroeService.insertar();
  }

}
