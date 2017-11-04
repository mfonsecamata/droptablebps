import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Notice} from './notice';


@Injectable()
export class NoticeService {

  headers: Headers;    
  options: RequestOptions;

  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

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

}
