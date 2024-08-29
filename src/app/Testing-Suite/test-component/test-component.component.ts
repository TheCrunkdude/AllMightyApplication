import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Apitest2Service } from '../services/apitest2.service';




@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [RouterLink, RouterOutlet,],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent implements OnInit {

  title='Get'
constructor (private ApiserviceComponent: Apitest2Service) {}
  ngOnInit(): void {
    //alert ('popo inicializando')
    document.getElementById("ClassMain")?.remove()

  }
    testMethodApi(){
      if (this.ApiserviceComponent) {
        alert (this.ApiserviceComponent.apitestmethod());
      } else {
        console.error('Child component is not available!');
      }
     
    }
   
}
