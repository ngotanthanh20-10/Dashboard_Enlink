import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@ant-design/icons-angular';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';

import {
  DoubleRightOutline,
  LineOutline,
  ReloadOutline,
  SyncOutline,
  SettingOutline,
} from '@ant-design/icons-angular/icons';
import { ListMemberComponent } from './components/list-member/list-member.component';
import { FilterListMemberComponent } from './components/filter-list-member/filter-list-member.component';

const icons: IconDefinition[] = [
  DoubleRightOutline,
  LineOutline,
  ReloadOutline,
  SyncOutline,
  SettingOutline,
];

@NgModule({
  declarations: [ListMemberComponent, FilterListMemberComponent],
  imports: [
    CommonModule,

    NzSwitchModule,
    NzRadioModule,
    NzTableModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzGridModule,
    NzIconModule.forChild(icons),
  ],
})
export class TableModule {}
