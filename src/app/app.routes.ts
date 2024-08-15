import { RouterModule, Routes,  } from '@angular/router';
import { TestComponentComponent } from './Testing-Suite/test-component/test-component.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: 'Test', component: TestComponentComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }