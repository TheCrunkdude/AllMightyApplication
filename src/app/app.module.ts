import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestSuiteModule } from './Testing-Suite/test-suite.module';
import { TestSuiteRoutes } from './Testing-Suite/test-suite.routes';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TestSuiteModule,
    HttpClientModule,
    AppRoutes,
    TestSuiteRoutes
  ],
  providers:[provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
