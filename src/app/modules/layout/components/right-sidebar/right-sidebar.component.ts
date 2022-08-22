import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'loy-dashboard-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  @Input() visible = false;
  @Input() switchSidebar = false;
  @Input() isCollapsed = false;
  @Output() buttonChangeColor: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() buttonClickedIcon: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  radioValue = 'default';
  close(): void {
    this.visible = false;
  }

  onChangeColorSidebar() {
    this.buttonChangeColor.emit(!this.switchSidebar);
    this.switchSidebar = !this.switchSidebar;
  }

  onClickButtonIcon() {
    this.buttonClickedIcon.emit(!this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() {}

  ngOnInit(): void {}
}
