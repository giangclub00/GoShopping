import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './modules/common/containers/index';
// import { Page404Component } from './core-ui/views/pages/page404/page404.component';
// import { Page500Component } from './core-ui/views/pages/page500/page500.component';
// import { LoginComponent } from './core-ui/views/pages/login/login.component';
// import { RegisterComponent } from './core-ui/views/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'landing-page',
        loadChildren: () =>
          import('./modules/landing-page/landing-page.module').then((m) => m.LandingPageModule)
      },
      {
        path: 'product-management',
        loadChildren: () =>
          import('./modules/product-management/product-management.module').then((m) => m.ProductManagementModule)
      },
      {
        path: 'product-category-management',
        loadChildren: () =>
          import('./modules/product-category-management/product-category-management.module').then((m) => m.ProductCategoryManagementModule)
      },
    ]
  },
  // {
  //   path: '404',
  //   component: Page404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: Page500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  {path: '**', redirectTo: 'landing-page'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
