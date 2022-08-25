import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  HeaderComponent,
  FooterComponent,
  RightSidebarComponent,
  LeftSidebarComponent,
  UserProfileComponent,
  LayoutModalComponent,
  NotificationsComponent,
  HeaderSearchComponent,
} from './components';

//#region Ant design Import
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

import {
  AppstoreOutline,
  BellOutline,
  DashboardOutline,
  FileOutline,
  LayoutOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PieChartOutline,
  UserOutline,
  BarChartOutline,
  LogoutOutline,
} from '@ant-design/icons-angular/icons';
import { NotificationItemComponent } from './components/notifications/components/notification-item/notification-item.component';
//#endregion

const icons: IconDefinition[] = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  BellOutline,
  AppstoreOutline,
  DashboardOutline,
  PieChartOutline,
  FileOutline,
  LockOutline,
  LayoutOutline,
  UserOutline,
  BarChartOutline,
  LogoutOutline,
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    UserProfileComponent,
    LayoutModalComponent,
    NotificationsComponent,
    HeaderSearchComponent,
    NotificationItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    //#region Ant design Import
    NzIconModule.forChild(icons),
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzBadgeModule,
    NzAvatarModule,
    NzMenuModule,
    NzTabsModule,
    NzDropDownModule,
    NzListModule,
    NzSpinModule,
    NzDrawerModule,
    NzDividerModule,
    NzRadioModule,
    NzSwitchModule,
    //#endregion
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    UserProfileComponent,
    LayoutModalComponent,
    NotificationsComponent,
    HeaderSearchComponent,
    NotificationItemComponent,
  ],
})
export class LayoutModule {}
