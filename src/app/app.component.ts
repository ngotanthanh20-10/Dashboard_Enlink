import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isCollapsed = false;
  onClickedButtonIcon(event: any) {
    this.isCollapsed = event;
  }
  ngOnInit(): void {}
}
