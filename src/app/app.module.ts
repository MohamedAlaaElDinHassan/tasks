import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { RentcarComponent } from './rentcar/rentcar.component';
import { RouterModule, Routes } from '@angular/router';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'controlpanel', component: ControlpanelComponent },
    { path: 'rentcar', component:RentcarComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    CheckoutComponent,
    ControlpanelComponent,
    RentcarComponent
  ],
  imports: [
    BrowserModule,
      DlDateTimePickerDateModule,
      AngularFontAwesomeModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: false } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
