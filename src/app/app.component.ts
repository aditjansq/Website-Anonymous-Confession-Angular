
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { routes } from './app.routes'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'confess-site';
}
