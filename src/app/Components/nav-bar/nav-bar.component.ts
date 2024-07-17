import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  constructor(private _storageService:StorageService){}
  local:any =localStorage.getItem('UserLoggedIn');
  userStatus:any=JSON.parse(this.local);
  ngOnInit(): void {
        
    if(localStorage.getItem('UserLoggedIn')!=null){
    let local:any = localStorage.getItem('UserLoggedIn')
    this.userStatus=JSON.parse(local);
    this._storageService.currentLocal.subscribe((data)=>{
      console.log(data);
      if(data!=null&&data!=''){
        console.log(data);
      this.userStatus=data;
      }
    })
    }
  }
  logOut():void{
    localStorage.setItem('UserLoggedIn',JSON.stringify(false));
    this._storageService.updateLocal(localStorage.getItem('UserLoggedIn'))
    this.userStatus=false;
  }
}
