import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpContext, provideHttpClient } from '@angular/common/http';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from '../app.routes';
import { Router } from '@angular/router';
import { MaterialModule } from './MaterialModule';
import { FormsModule } from '@angular/forms';
import { TestSuiteRoutes } from './test-suite.routes';
import { ScalableComponent } from './scalable/scalable.component';

@NgModule({
  declarations: [TestComponentComponent, ScalableComponent],
  imports: [CommonModule, BrowserModule,AppRoutes, MaterialModule, FormsModule, TestSuiteRoutes],
  providers:[provideHttpClient()]
})

export class TestSuiteModule {

  constructor(private router: Router){}


 }
