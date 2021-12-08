import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupComponent } from './Authetication/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './Authetication/signin/signin.component';
import { RouterModule } from '@angular/router';
import { routing } from './routing';
import { ADatatableComponent} from './adatatable/adatatable.component';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ADatatableComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,RouterModule.forRoot(routing),
    DataTablesModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
