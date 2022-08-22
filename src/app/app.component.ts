import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isCollapsed = false;
  visible = false;
  switchSidebar = false;
  onClickedButtonIcon(event: any) {
    this.isCollapsed = event;
  }

  onClickOpenDrawer(event: any) {
    this.visible = event;
  }

  onChangeColorSidebar(event: any) {
    this.switchSidebar = event;
  }
  ngOnInit(): void {}
}
