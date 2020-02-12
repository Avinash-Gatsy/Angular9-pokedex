import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/classes/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  @Input('empObj') empObj:Employee;
  constructor() { }

  ngOnInit(): void {
    console.dir(this.empObj);
  }

}
