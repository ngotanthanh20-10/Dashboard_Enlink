import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  BellOutline,
  AppstoreOutline,
  DashboardOutline,
  PieChartOutline,
  FileOutline,
  LockOutline,
  LayoutOutline,
} from '@ant-design/icons-angular/icons';
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
  ],
  imports: [
    CommonModule,
    RouterModule,
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
    BrowserAnimationsModule,
    NzDrawerModule
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
  ],
})
export class LayoutModule {}
