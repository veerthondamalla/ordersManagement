import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{
  path:'home', component: HomeComponent
},{
  path:'order', component: OrderComponent,
  children: [{
    path: 'viewOrder', component: OrderViewComponent},
    {path: 'editOrder', component:OrderEditComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
