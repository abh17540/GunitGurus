import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatTabsModule} from "@angular/material/tabs";
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './TabContent/home/home.component';
import { CoursesComponent } from './TabContent/courses/courses.component';
import { EducatorsComponent } from './TabContent/educators/educators.component';
import { PricesComponent } from './TabContent/prices/prices.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CoursesComponent,
    EducatorsComponent,
    PricesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
