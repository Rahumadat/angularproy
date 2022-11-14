import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // num!: number;
  // randNum!: number;
  // str!: string;
  // first_name!: string;
  title = 'Bienvenido a MEAN!';
  tasks : any
  tasks2: any ={}

  // snacks!: string[];
  // loggedIn!: boolean;

  constructor(private _httpService: HttpService){}
  // ngOnInit se ejecutará cuando el componente se inicialice, después del método constructor.
  ngOnInit(){
    this.getTasksFromService();
    this.getTasksFromService2();
    // this.num = 7;
    // this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    // this.str = 'Hello Angular Developer!';
    // this.first_name = 'Alpha';
    // this.snacks = ["brushed suede", "cookie"];
    // this.loggedIn = true;

  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
       console.log("Got our tasks1!", data)
       // En este ejemplo, el array de tareas se asigna a la clave "tasks" en el objeto de datos.
       // Esto puede ser diferente para ti, según cómo configuras tu tarea API.
       this.tasks = data;
    });
 }
 getTasksFromService2(){
  let observable = this._httpService.getTasks2();
  observable.subscribe(data => {
     console.log("Got our tasks2!", data)
     // En este ejemplo, el array de tareas se asigna a la clave "tasks" en el objeto de datos.
     // Esto puede ser diferente para ti, según cómo configuras tu tarea API.
     this.tasks2 = data;



  });
}
}
