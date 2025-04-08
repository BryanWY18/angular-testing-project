import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Output() tasks:string[] = [];

  @Output() reload= new EventEmitter<void>;
  
  task:string="";
  
  constructor(private library:TaskService) {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {
    this.tasks.push(task);
    this.library.addTask(task);
    console.log('Adding task:', task);
  }

  updateTask(task: string) {
    this.library.updateTask(task);
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    this.library.deleteTask(task);
    console.log('Deleting task:', task);
  }

  editTask(task:string){

  }
}
