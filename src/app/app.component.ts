import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TestComponentComponent } from "./Testing-Suite/test-component/test-component.component";
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient]
})
export class AppComponent {
  title = 'AllMightyApplication';
}
