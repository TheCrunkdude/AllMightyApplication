import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpContext, provideHttpClient } from '@angular/common/http';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from '../app.routes';
import { Router } from '@angular/router';


@NgModule({
  declarations: [TestComponentComponent],
  imports: [CommonModule, BrowserModule,AppRoutes],
  providers:[provideHttpClient()]
})

export class TestModule {

  constructor(private router: Router){}


 }
