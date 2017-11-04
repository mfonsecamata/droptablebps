import { Component, OnInit } from '@angular/core';
//import {NgForm} from '@angular/forms';
import {AngularFireList} from 'angularfire2/database';
import { Heroe } from '../../services/heroe';
import { HeroeService } from '../../services/heroe.service';


@Component({
  selector: 'app-heroe-add-fire-base',
  templateUrl: './heroe-add-fire-base.component.html',
  styleUrls: ['./heroe-add-fire-base.component.css'],
  providers: [HeroeService]
})
export class HeroeAddFireBaseComponent implements OnInit {

  newHero:any={};

  hoeroelist : AngularFireList<Heroe>; 

  constructor(private heroeService: HeroeService ) { }

  ngOnInit() {

    this.heroeService.getData();
    
  }

  /*onSubmit(form: NgForm){
    console.log("Entro a la funcion"); 
    this.heroeService.addHeroesFireBase(form.value);
  }*/

  agregarHeroe(newHero:Heroe){  
    console.log("Entro a la funcion agregarHeroe"); 
    this.newHero=newHero;
    this.heroeService.addHeroesFireBase(this.newHero);    
}

}
