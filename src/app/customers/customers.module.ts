import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule } from '@po-ui/ng-components';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    PoModule
  ]
})
export class CustomersModule { }
