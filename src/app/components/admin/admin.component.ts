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
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.student);
    this.api.createStudent(this.student).subscribe( result => {
      console.log(result);
    });
  }


}
