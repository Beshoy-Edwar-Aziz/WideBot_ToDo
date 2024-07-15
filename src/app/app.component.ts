import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateToDoItemComponent } from "./Components/create-to-do-item/create-to-do-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateToDoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WideBot_ToDo';
  
}
