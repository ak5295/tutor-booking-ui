import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { TutorsComponent } from './tutors/tutors.component';
// import: [ RouterModule.forRoot(routes)];


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tutors', component: TutorsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
