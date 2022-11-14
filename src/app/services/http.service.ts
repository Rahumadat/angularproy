import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) {
      // this.getTasks();
      // this.getTasks2();

    }
  getTasks(){
    // Elimina las líneas de código donde queremos la variable "tempObservable" y suscríbete a ella
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Devuelve el observable a donde se haya invocado el método getTasks 
    return this._http.get(environment.serviceGetTask);
}

  getTasks2(){
    // Elimina las líneas de código donde queremos la variable "tempObservable" y suscríbete a ella
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Devuelve el observable a donde se haya invocado el método getTasks 
    return this._http.get(environment.serviceGetTask2);
  }
}

