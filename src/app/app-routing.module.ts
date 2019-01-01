import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { TutorsComponent } from './components/tutors/tutors.component';
// import: [ RouterModule.forRoot(routes)];


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tutors', component: TutorsComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
