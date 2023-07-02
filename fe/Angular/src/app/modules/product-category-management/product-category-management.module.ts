import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryManagementComponent } from './product-category-management.component';
import { ProductCategoryManagementRoutingModule } from './product-category-management.router';
import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';

@NgModule({
  imports: [ 
    CommonModule,
    ProductCategoryManagementRoutingModule,
    AvatarModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule,
    TableModule,
    TabsModule
  ],
  declarations: [ProductCategoryManagementComponent]
})
export class ProductCategoryManagementModule { }
