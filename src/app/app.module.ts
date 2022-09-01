import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { EmailsComponent } from './home/emails/emails.component';
import { ItemsService } from './home/sidenav/items.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModuleIcon } from './shared/font-awesome-icon.module';
import { EmailsService } from './home/emails/emails.service';
const routes:Routes =[
{path:"home",component:HomeComponent , children:[
  {path:"", component: EmailsComponent}

] },
{ path: '', redirectTo: 'home' , pathMatch:"full"}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    NavbarComponent,
    EmailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModuleIcon,
    FormsModule

    
    
  ],
  providers: [ItemsService,
    EmailsService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
