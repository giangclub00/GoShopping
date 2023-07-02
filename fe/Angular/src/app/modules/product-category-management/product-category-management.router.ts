
import { ProductCategoryManagementComponent } from './product-category-management.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoryManagementComponent,
    data: {
      title: "Product Category Management"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryManagementRoutingModule {
}
