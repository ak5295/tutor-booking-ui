import { ApiService } from './../../service/api.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  student = new Student();
  students: Student[] = [];

  ienssn: Boolean;

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getStudents().subscribe( students => {
      this.students = students;
    });
    // this.corsService .... {
    //   this.ienssn = result.ienssn;
    // }
    this.ienssn = true;
  }

  save() {
    console.log(this.student);
    this.api.createStudent(this.student).subscribe( result => {
      console.log(result);
      this.api.getStudents().subscribe( students => {
        this.students = students;
      });
    });
  }


}
