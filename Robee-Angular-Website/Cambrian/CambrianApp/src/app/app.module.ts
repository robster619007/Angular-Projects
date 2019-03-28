import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed for [(ngModel)]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AirlineComponent } from './airline/airline.component';
import { TransportComponent } from './transport/transport.component';
import { CambrianServiceService } from './cambrian-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AirlineComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CambrianServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
