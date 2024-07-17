import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
  let isUserLoggedIn:boolean;
  if(localStorage.getItem('UserLoggedIn')!=null){
    let local:any = localStorage.getItem('UserLoggedIn');
    isUserLoggedIn = JSON.parse(local);
    if(isUserLoggedIn==false){
      Swal.fire({
        title:'User Not Logged in',
        toast:true,
      })
      _router.navigate(['/Login'])
      return false;
    }
  }else{
    Swal.fire({
      title:'User Not Logged in',
      toast:true,
    })
    _router.navigate(['/Login'])
    return false;
  }
  
  return true;
};
