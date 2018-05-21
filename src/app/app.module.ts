import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'controlpanel', component: ControlpanelComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    CheckoutComponent,
    ControlpanelComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: false } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
