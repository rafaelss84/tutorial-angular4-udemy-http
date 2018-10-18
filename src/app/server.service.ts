import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://tutorial-angular4-udemy-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://tutorial-angular4-udemy-http.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://tutorial-angular4-udemy-http.firebaseio.com/data.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ));
  }
}
