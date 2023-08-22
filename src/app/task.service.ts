import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
baseUrl = "https://ionic-app-dam-2a9ae-default-rtdb.firebaseio.com/"
  
saveTask(task:Task){
 return  this.http
  .post(this.baseUrl+'tasks.json', task)
  .pipe(tap(resData=>{
    console.log(resData)
  }))
}

updateTask() {
}

deleteTask() {
}

getTasks() {
}

getTaskById(){

}
constructor(private http:HttpClient) { }
}
