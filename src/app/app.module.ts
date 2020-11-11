import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { HomeComponent } from './home/home.component';
import { OrdertrackComponent } from './ordertrack/ordertrack.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderViewComponent,
    OrderEditComponent,
    HomeComponent,
    OrdertrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
