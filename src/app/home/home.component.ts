import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tutors: any[];

  constructor(private api:  ApiService) { }

  ngOnInit() {
    this.api.getTutors().subscribe(result => {
      this.tutors = result;
    });
  }
}
