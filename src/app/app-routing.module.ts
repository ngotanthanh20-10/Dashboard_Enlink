import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_ROUTE } from './enums';
import { MainComponent } from './modules/dashboard-main/main.component';
import { ListMemberComponent } from './modules/table/components/list-member/list-member.component';

const routes: Routes = [
  {
    path: AUTH_ROUTE.NULL,
    redirectTo: '/dashboard/default',
    pathMatch: 'full',
  },
  {
    path: AUTH_ROUTE.DASHBOARD,
    redirectTo: '/dashboard/default',
    pathMatch: 'full',
  },
  {
    path: AUTH_ROUTE.DASHBOARD_MAIN,
    loadChildren: () =>
      import('./modules/dashboard-main/dashboard-main.module').then(
        (t) => t.DashboardMainModule
      ),
    component: MainComponent,
  },
  {
    path: AUTH_ROUTE.DASHBOARD_CRM,
    loadChildren: () =>
      import('./modules/table/table.module').then((t) => t.TableModule),
    component: ListMemberComponent,
  },
  {
    path: AUTH_ROUTE.DASHBOARD_ECOMMERCE,
    loadChildren: () =>
      import('./modules/dashboard-main/dashboard-main.module').then(
        (t) => t.DashboardMainModule
      ),
    component: MainComponent,
  },
  {
    path: AUTH_ROUTE.DASHBOARD_PROJECTS,
    loadChildren: () =>
      import('./modules/dashboard-main/dashboard-main.module').then(
        (t) => t.DashboardMainModule
      ),
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
