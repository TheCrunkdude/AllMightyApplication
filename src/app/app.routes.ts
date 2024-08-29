import { RouterModule, Routes,  } from '@angular/router';
import { TestComponentComponent } from './Testing-Suite/test-component/test-component.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: 'Test', component: TestComponentComponent },
    {path: 'home', component: AppComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }