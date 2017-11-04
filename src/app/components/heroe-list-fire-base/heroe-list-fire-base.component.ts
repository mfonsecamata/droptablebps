import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../services/heroe';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe-list-fire-base',
  templateUrl: './heroe-list-fire-base.component.html',
  styleUrls: ['./heroe-list-fire-base.component.css'],
  providers: [HeroeService]
})
export class HeroeListFireBaseComponent implements OnInit {

  hoeroelist : Heroe[];

  constructor(private heroeService: HeroeService ) { }

  ngOnInit() {

    var x = this.heroeService.getData();

    x.snapshotChanges().subscribe(item=>{
        this.hoeroelist = [];
        item.forEach(element=>{
          var y = element.payload.toJSON();
          //y["id"]= element.key;
          this.hoeroelist.push(y as Heroe);
        });

    });

  }

}
