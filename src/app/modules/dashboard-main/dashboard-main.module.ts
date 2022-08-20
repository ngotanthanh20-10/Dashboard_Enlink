import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'dashboard/default',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardMainModule {}
