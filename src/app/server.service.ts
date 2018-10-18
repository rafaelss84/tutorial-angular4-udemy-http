import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://tutorial-angular4-udemy-http.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }
}
