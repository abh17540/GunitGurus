import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./TabContent/home/home.component";
import {EducatorsComponent} from "./TabContent/educators/educators.component";
import {PricesComponent} from "./TabContent/prices/prices.component";
import {CoursesComponent} from "./TabContent/courses/courses.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'educators', component: EducatorsComponent },
  { path: 'pricing', component: PricesComponent},
  { path: 'courses', component: CoursesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
