import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private library:TaskService) {
    console.log('TaskService initialized');
  }

  storage:string[]=[];

  addTask(task:string){
    this.storage.push(task);
    localStorage.setItem("storage",JSON.stringify(this.storage));
  }

  updateTask(task: string) {
    const update= task;
    this.storage.push(update);
    localStorage.setItem("storage",JSON.stringify(this.storage));
  }

  deleteTask(task: string) {
    const del= this.storage;
    const find=del.filter(take=> take!==task);
    localStorage.setItem('storage', JSON.stringify(this.storage));
  }

  getTasks():void{
    this.storage=JSON.parse(localStorage.getItem('storage')||'[]');
  }

}