import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

let {pattern,minLength,maxLength,required}= Validators
let bootstrap:any;
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _router:Router){}
RegisteredUsersList:any=[];
Register:FormGroup = new FormGroup({
  email:new FormControl('',[required]),
  password:new FormControl('',[required,pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  firstname:new FormControl('',[required]),
  lastname:new FormControl('',[required])
});
handleRegister():void{
  let body={
    "email":this.Register.value.email,
    "password":this.Register.value.password,
    "firstname":this.Register.value.firstname,
    "lastname":this.Register.value.lastname
  };
  if(localStorage.getItem('UsersList')!=null){
    let local:any = localStorage.getItem('UsersList');
    this.RegisteredUsersList = JSON.parse(local);
  }
  let flag:boolean=false;
  if(this.RegisteredUsersList!=0){
    for(let i =0;i<this.RegisteredUsersList.length;i++){
      if(this.RegisteredUsersList[i].email==this.Register.value.email){
        Swal.fire({
          title:'User Already Exists',
          icon:'error'
        })
        flag=true;
        break;
      }
    }
    if(flag!=true){
      this.RegisteredUsersList.push(body);
      localStorage.setItem('UsersList',JSON.stringify(this.RegisteredUsersList))
      Swal.fire({
        title:'User Created',
        icon:'success'
      })
      this._router.navigate(['/Login'])
    }
  }else{
    this.RegisteredUsersList.push(body);
      localStorage.setItem('UsersList',JSON.stringify(this.RegisteredUsersList))
      Swal.fire({
        title:'User Created',
        icon:'success'
      })
      this._router.navigate(['/Login'])
  }
}
}
