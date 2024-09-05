import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Apitest2Service } from '../services/apitest2.service';
import { Body2 } from '../interfaces/body-interface';
import { EmployeeTable, EmployeeTable2 } from '../interfaces/employeetable';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
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
            alert(result);
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
            // //CLASS LIST MOCKUP
            // const mockEmployees: EmployeeTable2[] = [
            //   new EmployeeTable2(1, 101, "Alice", "Smith", 70000),
            //   new EmployeeTable2(2, 102, "Bob", "Johnson", 80000),
            //   new EmployeeTable2(3, 103, "Charlie", "Williams", 90000),
            //   new EmployeeTable2(4, 104, "Diana", "Brown", 85000),
            // ];

            // //HOW TO MAP AN OBJECT TO AN ARRAY WITH SPECIFIC CLASS
            // response.map(x => {
            //   const employeetable: EmployeeTable = {
            //     employeeID: 0,
            //     deptID: 0,
            //     age: 0,
            //     firstName: "popo",
            //     lastName: "popo",
            //     salary: 0
            //   };
            //   alert(employeetable);
            //   console.log(employeetable);
            //   this.result2.push(employeetable);
            // });

            this.result = response;
            this.dataSource = new MatTableDataSource<EmployeeTable>(this.result);
            this.dataSource.paginator = this.paginator;
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

