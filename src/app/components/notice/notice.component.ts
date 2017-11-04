import { Component, OnInit } from '@angular/core';
import{Notice} from '../../services/notice';
import{NoticeService} from '../../services/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  providers: [NoticeService]
})
export class NoticeComponent implements OnInit {

  notice: Notice;
  notices: Notice[];
  posts: Notice[];
  
  constructor(private noticeService:NoticeService){}

  getDatosGenericos():void{    
          this.noticeService
          .getService('https://jsonplaceholder.typicode.com/posts')
          .then(result => this.notices = result)
          .catch(error => console.log(error));    
  }

  ngOnInit() {
    this.getDatosGenericos();
  }

}
