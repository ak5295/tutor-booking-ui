import { Student } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('/api/students');
  }

  getTutors(): Observable<any[]> {
    return this.http.get<any[]>('/api/tutors');
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('/api/students', student);
  }

  createTutor(tutor: any): Observable<any> {
    return this.http.post<any>('/api/tutors', tutor);
  }
}
