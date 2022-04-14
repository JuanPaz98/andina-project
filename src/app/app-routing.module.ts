import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'productos', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
  { path: 'login', component: LoginComponent},
  { path: 'crear-producto', loadChildren: () => import('./pages/new-product/new-product.module').then(m => m.NewProductModule)},
  { path: 'dashboard', component: DashboardComponent},

  /* {path: '**', component: AndinaStoreComponent}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
