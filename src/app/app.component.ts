import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isCollapsed = false;
  visibleRight = false;
  switchSidebar = false;
  headerMode = 'white';
  dropdownProfile = '';

  onChangeModeHeader(event: any) {
    this.headerMode = event;
  }

  onClickedButtonIcon(event: any) {
    this.isCollapsed = event;
  }

  onClickOpenDrawer(event: any) {
    this.visibleRight = event;
  }

  onChangeColorSidebar(event: any) {
    this.switchSidebar = event;
  }

  ngOnInit(): void {}
}
