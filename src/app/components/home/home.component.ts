import { ApiService } from '../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  student = new Student();

  constructor(private api:  ApiService) { }

  ngOnInit() {
    const listOfNumbers = [0, 1, 2, 3, 4, 5];
    console.log(listOfNumbers[2]);

    const square = [1, 2, 3];
    console.log(square.push(4));

    const today = {
      squarrel : false,
      events : [`running`, `pizza`, `tree`]
    };
    console.log(today.squarrel);
    console.log(today.events[2]);

    const description = {
      work : `went to work`
    };
    console.log(description.work);

    const anObject = {
      left : 1,
      right : 2
    };
    console.log(anObject.left);
    delete anObject.left;
    console.log(anObject.left);

    Object.assign(anObject, {middle : 2, left : 3});
    console.log(anObject);



  }

  save() {
    console.log(this.student);
    this.api.createStudent(this.student).subscribe( result => {
      console.log(result);
    });

  }

  addEntry(squarrel, events) {
    const journal = [];
    const today = {
      squarrel : false,
      events : [`running`, `pizza`, `tree`]
    };
    console.log(today.squarrel);
    console.log(today.events[2]);
    journal.push(
      {squarrel,
       events

      }
    );
    console.log(journal);
    for (let i = 0; i < journal.length; i++) {
      const entry = journal[i];
      console.log(entry);
    }


    // for (const entry of journal) {
    //   if (entry.events.includes(`peanuts`) &&
    //      !entry.events.includes(`brushed teeth`)) {
    //     entry.events.push(`peanut teeth`);
    //   }
    // }
    // console.log(journal);
  }
  // addEntry(false,["ice cream","penuts"])";


  journalEvents(journal) {
    const events = [];
    for (const entry of journal) {
      for (const event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    console.log(this.journalEvents(journal));
    return events;
  }

  randomPointOnCircle(radius) {
    const angle = Math.random() * 2 * Math.PI;
    console.log({x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)});
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
  }





}
