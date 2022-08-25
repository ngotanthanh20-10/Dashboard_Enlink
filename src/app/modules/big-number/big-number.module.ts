import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BigNumberComponent } from './components/big-number/big-number.component';
import { CardNumberComponent } from './components/card-number/card-number.component';

@NgModule({
  declarations: [BigNumberComponent, CardNumberComponent],
  imports: [
    CommonModule,

    //#region Ant design Import
    NzCardModule,
    NzGridModule,
    NzAvatarModule,
    //#end region Ant design Import
  ],
  exports: [BigNumberComponent],
})
export class BigNumberModule {}
