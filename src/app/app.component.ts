import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './services/task.service';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports: [TaskListComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';

  constructor(private library:TaskService){}

  addTask(task: string) {

  }

  deleteTask(task: string) {
  }

  getTasks(event:string): string[] {
    return [];
  }

  taskArray:string[]=[];



}
