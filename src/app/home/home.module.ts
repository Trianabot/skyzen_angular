import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbTabsetModule, NbCardModule, NbInputModule, NbMenuModule, NbSearchModule, NbIconModule, NbContextMenuModule, NbSelectModule, NbTreeGridModule, NbFilterDirective, NbCalendarRangeModule, NbDatepickerModule } from '@nebular/theme';
import { StockComponent } from './stock/stock.component';import { NbEvaIconsModule } from '@nebular/eva-icons';
import { OrderComponent } from './order/order.component';
import { ProductOverviewComponent } from './products/product-overview/product-overview.component';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { UserOverviewComponent } from './users/user-overview/user-overview.component';
import { RouterModule } from '@angular/router';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SalesOverviewComponent } from './sales/sales-overview/sales-overview.component';
import { SalesCustomerbalanceComponent } from './sales/sales-customerbalance/sales-customerbalance.component';
import { SalesComponent } from './sales/sales.component';
import { ChartModule,HIGHCHARTS_MODULES  } from 'angular-highcharts';
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent, StockComponent, OrderComponent, ProductOverviewComponent, ProductDetailsComponent, ProductEditComponent, UserOverviewComponent, UserEditComponent, SalesOverviewComponent, SalesCustomerbalanceComponent, SalesComponent, UserDetailsComponent],
  imports: [
    CommonModule,ChartModule,
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
NbTreeGridModule,
    ReactiveFormsModule,
    FormsModule,RouterModule,
    Ng2SmartTableModule,
    NgxPaginationModule,
    NbCalendarRangeModule,
    NbDatepickerModule,
    Ng2SearchPipeModule
    // NgTableComponent,
    // NgTableFilteringDirective,
    // NgTablePagingDirective,
    // NgTableSortingDirective
  
  ],
  providers: [{provide: HIGHCHARTS_MODULES,
    useFactory: () => [ ]}],
})
export class HomeModule { 
  
}
