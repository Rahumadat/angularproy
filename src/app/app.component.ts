import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Bienvenido a MEAN!';
  tasks : any
  tasks2: any ={}
  muestraTodos: boolean = false
  muestraUno: boolean = false



  constructor(private _httpService: HttpService){}
  // ngOnInit se ejecutará cuando el componente se inicialice, después del método constructor.
  ngOnInit(){
    // this.getTasksFromService();
    // this.getTasksFromService2();
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
    console.log("Got our tasks1!", data)
    this.muestraTodos = true;
    this.muestraUno = false;
    this.tasks = data;
    });
}
getTasksFromService2(id: String){
  let observable = this._httpService.getTasks2(id);
  observable.subscribe(data => {
  console.log("Got our tasks2!", data)
  this.muestraUno = true;
  this.tasks2 = data;




  });
}
}
