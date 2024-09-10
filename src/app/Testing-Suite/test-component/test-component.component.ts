import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Apitest2Service } from '../services/apitest2.service';
import { Body2 } from '../interfaces/body-interface';
import { EmployeeTable, EmployeeTable2 } from '../interfaces/employeetable';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent implements OnInit {
  
  result: any;
  title = 'Get'
  title2 = 'Post'
  title3 = 'Update'
  title4 = 'Delete'
  title0= 'Get Employees'
  body: Body2;
  result2: EmployeeTable[] = [];
  employeeRequest: EmployeeTable = {
    employeeID : 0,
    deptID : 0,
    age : 0,
    firstName : ' ',
    lastName : ' ',
    salary : 0
  };


  constructor(private ApiserviceComponent: Apitest2Service) 
  {

    this.body = {

      propiedad1: "popo de dolar",

      propiedad2: 666
    }
  }

  ngOnInit(): void {
    //alert ('popo inicializando')
    document.getElementById("ClassMain")?.remove()
  }
  displayedColumns: string[] = ['EmployeeID','DeptID','Age','FirstName','LastName','Salary'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  async testMethodApi() {
    if (this.ApiserviceComponent) {

      let result = 'test';
      this.ApiserviceComponent.apitestmethod()
        .subscribe(
          (response: any) => {
            console.log(response);
            result = response;
            alertify.success(result);
          })
    } else {
      console.error('Child component is not availablee!');
    }
    

  }
  /// --------////
  async GetemployeesMethod() {
    if (this.ApiserviceComponent) {

      
      

      this.ApiserviceComponent.GetemployeesMethod()
        .subscribe(
          response => {
            this.result = response;
            this.dataSource = new MatTableDataSource<EmployeeTable>(this.result);
            this.dataSource.paginator = this.paginator;
          })
    } else {
      console.error('Child component is not availablee!');
    }
  }

  // Post//

  async postcomponentMethodApi() {
    if (this.ApiserviceComponent) {
      let result = 'post';
      this.ApiserviceComponent.apipostmethod(this.employeeRequest)
        .subscribe(
          (response: any) => {
            console.log(response);
            result = response;
            alertify.success(result)

          })


    } else {
      console.error('Child component is not availablee!');
    }

  }
  
  async putcomponentMethodApi() {
    if (this.ApiserviceComponent) {
       let result = this.ApiserviceComponent.apiputmethod(this.employeeRequest)  .subscribe(
          (response: any) => {
            console.log(response);
            result = response;
            alertify.success(result);
          })
    } else {

      console.error('PutMethod component is not available!');
    }

  }

  async deletecomponentMethodApi() {
    if (this.ApiserviceComponent) {

      let result = 'delete';

      this.ApiserviceComponent.apideletemethod(this.employeeRequest.employeeID)
        .subscribe(
          (response: any) => {
            console.log(response);
            result = response;
            alertify.success(result);

          })
    } else {
      console.error('Child component is not availablee!');
    }

  }
}

export { Body2 };

