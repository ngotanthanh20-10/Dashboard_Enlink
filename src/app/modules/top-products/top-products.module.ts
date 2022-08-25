import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopProductComponent } from './componennts/top-product/top-product.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [TopProductComponent],
  imports: [
    CommonModule,
    //from antd
    NzGridModule,
    NzCardModule,
    NzTableModule,
    NzProgressModule
  ],
  exports: [
    TopProductComponent
  ]
})
export class TopProductsModule { }
