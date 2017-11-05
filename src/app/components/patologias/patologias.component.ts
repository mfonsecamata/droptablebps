import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import { IncidentesService } from '../../services/incidentes.service';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../services/heroe';



@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.component.html',
})

export class PatologiasComponent implements OnInit {

  patologiasAnios;
  hoeroelist : Heroe[];


  myVar =1;
  constructor(
  private heroeService: HeroeService ,
  private incidentesService:IncidentesService) { }

  ngOnInit() {


//llamar firebase

var x = this.heroeService.getData();
    console.log(x);
x.snapshotChanges().subscribe(item=>{
    this.hoeroelist = [];
    item.forEach(element=>{
    var y = element.payload.toJSON();
    y["id"]= element.key;
      this.hoeroelist.push(y as Heroe);
      //console.log(element.payload.toJSON());
    });

});

}




  click1(){
    localStorage.setItem('patologia', 'gripe');
    this.myVar =2;
      this.ngOnInit();
    //location.reload();
  }

  click2(){
      this.myVar =3;
      localStorage.setItem('patologia', 'sacrolumbalgia');
        this.ngOnInit();
      //location.reload();
  }
  click3(){
      this.myVar =4;
      localStorage.setItem('patologia', 'neumonía');
        this.ngOnInit();
      //location.reload();
  }



}
