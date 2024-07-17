import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'ToDo',pathMatch:'full'},
    {path:"ToDo",canActivate:[authGuard],pathMatch:'full',loadComponent:()=>import('./Components/create-to-do-item/create-to-do-item.component').then((mod)=>mod.CreateToDoItemComponent)},
    {path:'Login',pathMatch:'full',loadComponent:()=>import('./Components/login/login.component').then((mod)=>mod.LoginComponent)},
    {path:'Register',pathMatch:'full',loadComponent:()=>import('./Components/register/register.component').then((mod)=>mod.RegisterComponent)}
];
