import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateToDoItemComponent } from "./Components/create-to-do-item/create-to-do-item.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateToDoItemComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WideBot_ToDo';
  
}
