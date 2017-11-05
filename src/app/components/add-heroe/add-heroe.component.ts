import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import {Heroe} from '../../services/heroe';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css'],
  providers: [HeroeService]
})
export class AddHeroeComponent implements OnInit {
 
 newHero:any={};

  id: number;
  name:string;

  constructor(private heroeService: HeroeService) { }

  ngOnInit() {
  }

  agregarHeroe(newHero:Heroe){  
      console.log(newHero);
      this.newHero=newHero;
      this.heroeService.addHeroes(this.newHero);    
  }

}
