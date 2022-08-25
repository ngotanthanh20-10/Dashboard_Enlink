import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigNumberModule } from '../big-number/big-number.module';
import { TopProductsModule } from '../top-products/top-products.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    TopProductsModule,
    BigNumberModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardMainModule {}
