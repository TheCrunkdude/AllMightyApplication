import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Apitest2Service } from '../services/apitest2.service';

@Component({
  selector: 'app-test-component',
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
    async testMethodApi(){
      if (this.ApiserviceComponent) {

        let result = 'test';
        await this.ApiserviceComponent.apitestmethod()
        .subscribe(
          (response: any) => {
              console.log(response);
              result = response;
              alert(result);
          })


      } else {
        console.error('Child component is not availablee!');
      }
     
    }
   
}
