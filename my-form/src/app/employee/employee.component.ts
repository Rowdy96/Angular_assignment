import { Component, OnInit } from '@angular/core';
import {EmployeModel} from '../employe-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 
  

  Qualifications: string[];
  Experiences: string[];
  Languages: string[];
  model = new EmployeModel("","","",null,"","","","","","",[]);

  constructor() { }
  ngOnInit() {
    this.Qualifications =['12th','B.tech','M.tech','PHD'];
    this.Experiences =['intern','1 year','2 year','3 year'];
    this.Languages =['C/C++','Java','C#','PHP','Python'];

  }
  send() {
    console.log(this.model);
  }
}
