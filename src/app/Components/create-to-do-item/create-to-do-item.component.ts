import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../Services/storage.service';
import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchPipe } from '../../Pipes/search.pipe';
NgModel
@Component({
  selector: 'app-create-to-do-item',
  standalone: true,
  imports: [NgStyle,NgClass,FormsModule,SearchPipe],
  templateUrl: './create-to-do-item.component.html',
  styleUrl: './create-to-do-item.component.css'
})
export class CreateToDoItemComponent implements OnInit {
  constructor(private _storageService:StorageService){}
  toDoData:any=[];
  searchValue:string='';
  ngOnInit(): void {
    // Check If There is data inside localStorage in order to show those items in the list
    if(localStorage.getItem('ToDo')!=null){
      let localstorage:any = localStorage.getItem('ToDo');
      // this provides updation in order to show items in real time when they're deleted or added
      this._storageService.currentStorage.subscribe({
        next:(data)=>{
          if(data?.length!=0){
           let d= JSON.parse(data);
            this.toDoData=d;
          }
        }
      })    
      this.toDoData=JSON.parse(localstorage);
      console.log(this.toDoData);
    }
  }
  // Add Items To Local Storage In Order To Maintain Data On Refresh As Local Storage Acts Like a Database
  addToDoList():void{    
    let element:any = document.getElementById('inputField');
    let data = {
      "title":element?.value
    };
    this._storageService.addToLocalStorage(data);
    
      let localstorage:any = localStorage.getItem('ToDo');
      this._storageService.currentStorage.subscribe({
      next:(data)=>{
        if(data?.length!=0){
         let d= JSON.parse(data);
          this.toDoData=d;
        }
      }
    })    
      this.toDoData=JSON.parse(localstorage);
      console.log(this.toDoData);
    
   
    console.log('k');
  }
  // Delete item from localstorage
  deleteLocalStorageItem(index:number):void{
    this._storageService.deleteLocalStorage(index);
  }
  // Delete the whole list
  deleteAll():void{
    localStorage.clear();
    this.toDoData=[];
    this._storageService.ToDoArray=[];
    this._storageService.updateStorage(localStorage.getItem('ToDo'));
  }
  boxChecked(index:number):void{
    let checkBoxElement:any= document.querySelectorAll('#checkbox');
    let checkValue=checkBoxElement[index]?.checked;
    console.log(checkValue);
    
    if(localStorage.getItem('ToDo')!=null){
      this.ngOnInit();
      this.toDoData[index].check=checkValue;
      localStorage.setItem('ToDo',JSON.stringify(this.toDoData));
    }
  }
  
}
