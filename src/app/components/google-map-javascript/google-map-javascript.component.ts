import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../services/heroe';
import { HeroeService } from '../../services/heroe.service';
import {Marker} from './marker.model';

declare var google:any;

@Component({
  selector: 'app-google-map-javascript',
  templateUrl: './google-map-javascript.component.html',
  styleUrls: ['./google-map-javascript.component.css'],
  providers: [HeroeService]
})
export class GoogleMapJavascriptComponent implements OnInit {

  private calendarName:string;
  private map:any;
  hoeroelist : Heroe[]=[];  

  private dibujar:Boolean=false;

  constructor(private heroeService: HeroeService) {    

  }

  public initMap():void {
    

    /*

    //crear un arreglo de option
    this.hoeroelist.forEach(element=>{

      var mapOptions={
        center : new google.maps.LatLng(element.lat,element.lng),
        zoom:10
      }

      this.map=new google.maps.Map(mapCanvas,mapOptions);
      
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(element.lat,element.lng),
        map: this.map,
        title:element.label,
        animation: google.maps.Animation.BOUNCE
      });
      
      google.maps.event.addListener(marker,'click', (function(marker){
        var infowindow = new google.maps.InfoWindow();
        return function () {
          infowindow.setContent(element.label);
          infowindow.open(this.map,marker);
        }
      }))(marker);

      marker.setMap(this.map);

    });   */
  }

  zoomIn(){
    this.map.setZoom(this.map.getZoom+1);
  }

  zoomOut(){
    this.map.setZoom(this.map.getZoom-1);
  }

  ngOnInit() {

        var x = this.heroeService.getData();
        
        this.dibujar=false;

        x.snapshotChanges().subscribe(item=>{

          var i =0;

          this.hoeroelist = [];

          item.forEach(element=>{

            i=i+1;
            var y = element.payload.toJSON();            
            this.hoeroelist.push(y as Heroe);           
           
            if (i==item.length){
                          
              var mapCanvas = document.getElementById("map");
              var marker= new google.maps.Marker();
              var myCenter = new google.maps.LatLng(0,0);
              var mapOptions={
                center:myCenter,
                zoom:10
              }                                
              
              var mapOptions={
                center : new google.maps.LatLng(this.hoeroelist[0].lat,this.hoeroelist[0].lng),
                zoom:10
              }

              this.map=new google.maps.Map(mapCanvas,mapOptions);

              console.log("cantidad de elementos de lisa"+this.hoeroelist.length)
            
              for (var ii_ = 0, j_ = this.hoeroelist.length; ii_ < j_; ii_++) {
                
                console.log(ii_);
                console.log(j_);

                var elem=this.hoeroelist[ii_]; 

                console.log(elem.domicilio);

                //this.map=new google.maps.Map(mapCanvas,mapOptions);

                marker = new google.maps.Marker({
                  position: new google.maps.LatLng(elem.lat,elem.lng),
                  map: this.map,
                  title: elem.label,
                  animation: google.maps.Animation.BOUNCE
                }); 

                /*google.maps.event.addListener(marker,'click', (function(marker){
                  var infowindow = new google.maps.InfoWindow();
                  return function () {
                    infowindow.setContent(elem.label);
                    infowindow.open(this.map,marker);
                  }
                }))(marker); */             

                /*this.map=new google.maps.Map(mapCanvas,mapOptions);
                
                marker = new google.maps.Marker({
                  position: new google.maps.LatLng(elem.lat,elem.lng),
                  map: this.map,
                  title: elem.label,
                  animation: google.maps.Animation.BOUNCE
                });

                google.maps.event.addListener(marker,'click', (function(marker){
                  var infowindow = new google.maps.InfoWindow();
                  return function () {
                    infowindow.setContent(elem.label);
                    infowindow.open(this.map,marker);
                  }
                }))(marker);
          
                marker.setMap(this.map);       */   
                
                marker.setMap(this.map);               
                
              }         
              
              this.dibujar=true;
            
              
        }

            //pintar el mapa
  /*                    
            var mapCanvas = document.getElementById("map");
            var marker= new google.maps.Marker();
            var myCenter = new google.maps.LatLng(0,0);
            var mapOption={
              center:myCenter,
              zoom:10
            }
        
            this.map=new google.maps.Map(mapCanvas,mapOption);
        
            console.log(this.hoeroelist);
        
            this.hoeroelist.forEach(element=>{
              
                var mapOptions={
                  center : new google.maps.LatLng(element.lat,element.lng),
                  zoom:10
                }
          
                this.map=new google.maps.Map(mapCanvas,mapOptions);
                
                marker = new google.maps.Marker({
                  position: new google.maps.LatLng(element.lat,element.lng),
                  map: this.map,
                  title:element.label,
                  animation: google.maps.Animation.BOUNCE
                });
                
                google.maps.event.addListener(marker,'click', (function(marker){
                  var infowindow = new google.maps.InfoWindow();
                  return function () {
                    infowindow.setContent(element.label);
                    infowindow.open(this.map,marker);
                  }
                }))(marker);
          
                marker.setMap(this.map);
          
              });
*/


              });
        
            });
    
       
  }

}
