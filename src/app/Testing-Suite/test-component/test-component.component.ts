import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Apitest2Service } from '../services/apitest2.service';
import { Body2 } from '../interfaces/body-interface';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent implements OnInit {

  title = 'Get'
  title2 = 'Post'
  title3 = 'Update'
  title4 = 'Delete'
  body: Body2;


  constructor(private ApiserviceComponent: Apitest2Service) {

    this.body = {

      propiedad1: "popo de dolar",

      propiedad2: 666
    }
  }

  ngOnInit(): void {
    //alert ('popo inicializando')
    document.getElementById("ClassMain")?.remove()
  }

  async testMethodApi() {
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

  async postcomponentMethodApi() {
    if (this.ApiserviceComponent) {

      let result = 'post';
      this.ApiserviceComponent.apipostmethod(this.body)
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


  async putcomponentMethodApi() {
    if (this.ApiserviceComponent) {

      let result = 'put';

      const data = 'pipipipipi'
      const data2 = true
      this.ApiserviceComponent.apiputmethod(data, data2)
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

  async deletecomponentMethodApi() {
    if (this.ApiserviceComponent) {

      let result = 'delete';

      const data = 'pipipipipi'
      const data2 = true
      this.ApiserviceComponent.apideletemethod(data, data2)
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

export { Body2 };

