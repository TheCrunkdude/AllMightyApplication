import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { ScalableComponent } from './scalable/scalable.component';

const routes: Routes = [
    {path: "Testhome", component:TestComponentComponent},
    {path: "Scalablecomponent", component:ScalableComponent},];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class TestSuiteRoutes {}