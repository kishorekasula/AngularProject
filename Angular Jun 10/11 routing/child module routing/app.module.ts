import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './aboutus.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

let appRules = [
    { path:"home",component:HomeComponent },
    { path:"contact",component:ContactComponent },
    { path:"about",component:AboutUsComponent },
    { path:"",component:HomeComponent },
];

@NgModule({
    imports: [BrowserModule,StudentModule,EmployeeModule,RouterModule.forRoot(appRules),RouterModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutUsComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }