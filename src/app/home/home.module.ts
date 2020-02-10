import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbTabsetModule, NbCardModule, NbInputModule, NbMenuModule, NbSearchModule, NbIconModule, NbContextMenuModule, NbSelectModule, NbTreeGridModule, NbFilterDirective } from '@nebular/theme';
import { StockComponent } from './stock/stock.component';import { NbEvaIconsModule } from '@nebular/eva-icons';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent, StockComponent, OrderComponent],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbTabsetModule,
    NbCardModule,
    NbInputModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbIconModule,
    NbContextMenuModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSelectModule,
    NbTreeGridModule
  
  ]
})
export class HomeModule { 
  
}
