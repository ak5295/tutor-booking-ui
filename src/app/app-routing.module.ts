import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
// import: [ RouterModule.forRoot(routes)];


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
