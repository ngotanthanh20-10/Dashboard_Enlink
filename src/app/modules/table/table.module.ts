import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { FilterComponent } from './components/filter/filter.component';
import { IconDefinition } from '@ant-design/icons-angular';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import {
  DoubleRightOutline,
  LineOutline,
  ReloadOutline,
  SyncOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  DoubleRightOutline,
  LineOutline,
  ReloadOutline,
  SyncOutline,
];

@NgModule({
  declarations: [TableComponent, FilterComponent],
  imports: [
    CommonModule,

    NzSwitchModule,
    NzRadioModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule.forRoot(icons),
  ],
})
export class TableModule {}
