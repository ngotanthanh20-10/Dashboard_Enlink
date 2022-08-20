import { Component, Input, OnInit } from '@angular/core';
import { AUTH_ROUTE } from 'src/app/enums';

@Component({
  selector: 'loy-dashboard-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent implements OnInit {
  @Input() isCollapsed = false;
  router = AUTH_ROUTE

  openMap: { [name: string]: boolean } = {
    dashboard: true,
    apps: false,
    components: false,
    charts: false,
    pages: false,
    authentication: false,
  };

  openMapApps: { [name: string]: boolean } = {
    chat: false,
    fileManager: false,
    mail: false,
    projects: false,
    ecommerce: false,
  };

  openMapComponents: { [name: string]: boolean } = {
    general: false,
    navigation: false,
    dataEntry: false,
    dataDisplay: false,
    feedback: false,
    others: false,
  };

  constructor() {}

  ngOnInit(): void {
    console.log(AUTH_ROUTE);
  }

  openHandler(value: string, arr: { [name: string]: boolean }): void {
    for (const key in arr) {
      if (key !== value) {
        arr[key] = false;
      }
    }
  }
}
