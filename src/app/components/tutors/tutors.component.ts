import { ApiService } from '../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {
  tutors: any[];

  constructor(private api: ApiService) {}

  ngOnInit() { this.api.getTutors().subscribe(result => {
    this.tutors = result;
  });

  }

}
