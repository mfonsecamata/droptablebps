import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HeroeService } from './heroe.service';
import { Heroe } from './heroe';



//import {Notice} from './notice';

import {Observable} from 'rxjs/Rx';


@Injectable()
export class IncidentesService {

constructor(private http: Http
,private heroeService: HeroeService

) {



  //this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
  //this.options = new RequestOptions({ headers: this.headers });
}

hoeroelist : Heroe[];


  headers: Headers;
  options: RequestOptions;
  incidentes=  [
      {
      "domicilio" : "domicilio1",
      "edad" : 30,
      "empresa" : "empresa1",
      "factor" : "factor1",
      "fecha" : "04/11/2017",
      "nombre" : "misael",
      "patologia" : "gripe",
      "puesto" : "desarrollador",
      "rubro" : "informática",
      "salario" : 1
    }
    , {
      "domicilio" : "domicilio2",
      "edad" : 30,
      "empresa" : "empresa2",
      "factor" : "factor2",
      "fecha" : "04/11/2017",
      "nombre" : "yosbany",
      "patologia" : "sacrolumbalgia",
      "puesto" : "desarrollador",
      "rubro" : "informática",
      "salario" : 2
    } ,

    {
      "domicilio" : "domicilio2",
      "edad" : 30,
      "empresa" : "empresa2",
      "factor" : "factor2",
      "fecha" : "04/11/2017",
      "nombre" : "rosnel",
      "patologia" : "gripe",
      "puesto" : "desarrollador",
      "rubro" : "informática",
      "salario" : 1
    } ,

    {
      "domicilio" : "domicilio1",
      "edad" : 30,
      "empresa" : "empresa1",
      "factor" : "factor1",
      "fecha" : "04/11/2017",
      "nombre" : "jonathan",
      "patologia" : "sacrolumbalgia",
      "puesto" : "desarrollador",
      "rubro" : "informática",
      "salario" : 1
    },

    {
      "domicilio" : "domicilio3",
      "edad" : 40,
      "empresa" : "empresa3",
      "factor" : "factor3",
      "fecha" : "10/11/2016",
      "nombre" : "pedro",
      "patologia" : "neumonía",
      "puesto" : "constructor",
      "rubro" : "construccion",
      "salario" : 1
    } ,

    {
      "domicilio" : "domicilio3",
      "edad" : 45,
      "empresa" : "empresa3",
      "factor" : "factor3",
      "fecha" : "10/11/2017",
      "nombre" : "juan",
      "patologia" : "neumonía",
      "puesto" : "constructor",
      "rubro" : "construccion",
      "salario" : 1
    } ,

    {
      "domicilio" : "domicilio4",
      "edad" : 38,
      "empresa" : "empresa4",
      "factor" : "factor4",
      "fecha" : "10/11/2017",
      "nombre" : "maria",
      "patologia" : "gripe",
      "puesto" : "enfermera",
      "rubro" : "salud",
      "salario" : 3
    }
    ];

    patologias: {labels: ['Gripe', 'Neomonia', 'Cancer'], data:[300, 500, 100]};

    patologia=localStorage.getItem("patologia");


  getService(url: string): Promise<any> {
    return this.http
        .get(url, this.options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  getIncidentes(){
  //return Observable.of(this.incidentes);


  var x = this.heroeService.getData();

  x.snapshotChanges().subscribe(item=>{
      this.hoeroelist = [];
      item.forEach(element=>{
        var y = element.payload.toJSON();
        //y["id"]= element.key;
        this.hoeroelist.push(y as Heroe);
        console.log(this.hoeroelist);
      });

  });



  return this.incidentes;
  }

  getPatologiasLabels(){
    var labels=[];
    var data=[];
    var arr = this.incidentes;
    var obj = { };
    for (var i = 0, j = arr.length; i < j; i++) {
      obj[arr[i].patologia] = (obj[arr[i].patologia] || 0) + 1;
    }
    //console.log(obj);
    for(var item in obj){
      labels.push(item)
      data.push(obj[item])
    }
    return labels;
  }

  getPatologiasData(){



    var labels=[];
    var data=[];
    var arr = this.incidentes;
    var obj = { };
    for (var i = 0, j = arr.length; i < j; i++) {
      obj[arr[i].patologia] = (obj[arr[i].patologia] || 0) + 1;
    }
    //console.log(obj);
    for(var item in obj){
      labels.push(item)
      data.push(obj[item])
    }
    return data;
  }



  getPatologiasAnios(){
   var anios = ["2013","2012","2015","2016","2017"];
   var data = [];
   var patologia= this.patologia;
    console.log("sssssssssssssssssssss");
   //console.log("locahhhhklkmlkmlnlkleeeee storage"+ localStorage.getItem("patologia") );


   //var heroes = this.heroeService.getData();
   console.log("heroes");
   //console.log(heroes);



   var soloPatologias= this.incidentes.filter(el =>
   el.patologia == patologia);
   for (var i = 0, j = anios.length; i < j; i++) {
    var soloAnios=soloPatologias.filter(
    el => el.fecha.split("/")[2] == anios[i]
    )
    data.push(soloAnios.length)
    }

    return anios;
  }

  getPatologiasNombre(){
   var anios = ["2013","2012","2015","2016","2017"]
   var data = [];
   var patologia= this.patologia;

   var soloPatologias= this.incidentes.filter(el =>
   el.patologia == patologia);
   for (var i = 0, j = anios.length; i < j; i++) {
    var soloAnios=soloPatologias.filter(
    el => el.fecha.split("/")[2] == anios[i]
    )
    data.push(soloAnios.length)
    }
    return patologia;

  }


 setPatologia(patologia){
  this.patologia=patologia;
 }


  getPatologiasAnioCantidad(){
   var anios = ["2013","2012","2015","2016","2017"]
   var data = [];
   var patologia= this.patologia;

   var soloPatologias= this.incidentes.filter(el =>
   el.patologia == patologia);
   for (var i = 0, j = anios.length; i < j; i++) {
    var soloAnios=soloPatologias.filter(
    el => el.fecha.split("/")[2] == anios[i]
    )
    data.push(soloAnios.length)
    }

    return data;
  }




}
