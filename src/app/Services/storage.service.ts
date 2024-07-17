import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  localstorage:BehaviorSubject<any>=new BehaviorSubject('');
  currentLocal=this.localstorage.asObservable();
  updateLocal(newValue:any){
    console.log(newValue);
    this.localstorage.next(newValue);
  }
  storage:BehaviorSubject<any>= new BehaviorSubject('');
  currentStorage = this.storage.asObservable();
  updateStorage(newData:any){
    this.storage.next(newData);
  }
  ToDoArray:Array<any>=[];
  addToLocalStorage(data:any):void{
    if(localStorage.getItem('ToDo')!=null){
      let data:any = localStorage.getItem('ToDo');
      this.ToDoArray = JSON.parse(data);
    }
    let toDoList:Object={
      "Title":data.title,
      "check":false
    };
    this.ToDoArray.push(toDoList);  
    localStorage.setItem("ToDo",JSON.stringify(this.ToDoArray));
    this.updateStorage(localStorage.getItem('ToDo'));
  }
  deleteLocalStorage(index:number):void{
    
    if(localStorage.getItem('ToDo')!=null){
      let localstorage:any=localStorage.getItem('ToDo');
      this.ToDoArray=JSON.parse(localstorage);
      this.ToDoArray.splice(index,1);
      localStorage.setItem('ToDo',JSON.stringify(this.ToDoArray));
      this.updateStorage(localStorage.getItem('ToDo'));
    }
  }
}
