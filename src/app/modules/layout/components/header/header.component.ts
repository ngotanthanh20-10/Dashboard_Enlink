import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'loy-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed = false;
  @Input() visible = false;
  @Input() headerMode = 'white';
  @Output() buttonClickedIcon: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() buttonClickOpenDrawer: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() buttonClickOpenDrawerLeft: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  visibleLeft = false;

  open(): void {
    this.visibleLeft = true;
  }

  close(): void {
    this.visibleLeft = false;
  }
  
  onClickOpenDrawerLeft() {
    this.buttonClickOpenDrawerLeft.emit(!this.visibleLeft);
    this.visible = !this.visibleLeft;
  }

  onClickOpenDrawer() {
    this.buttonClickOpenDrawer.emit(!this.visible);
    this.visible = !this.visible;
  }

  onClickButtonIcon() {
    this.buttonClickedIcon.emit(!this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() {}

  ngOnInit(): void {}
}
