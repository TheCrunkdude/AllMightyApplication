import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestModule } from './Testing-Suite/test.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TestModule,
    HttpClientModule,
    AppRoutes
  ],
  providers:[provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
