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
  @Input() headerMode = 'white';
  @Output() buttonChangeColor: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() buttonClickedIcon: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() buttonChangeModeHeader: EventEmitter<string> =
    new EventEmitter<string>();
  close(): void {
    this.visible = false;
  }

  onChangeModeHeader(value: string) {
    this.buttonChangeModeHeader.emit(value);
    this.headerMode = value;
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
