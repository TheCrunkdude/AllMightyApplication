import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { TestComponentComponent } from "./Testing-Suite/test-component/test-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, TestComponentComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AllMightyApplication';
}
