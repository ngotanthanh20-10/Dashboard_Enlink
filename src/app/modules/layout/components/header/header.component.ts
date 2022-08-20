import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'loy-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed = false;
  @Output() buttonClickedIcon: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onClickButtonIcon() {
    this.buttonClickedIcon.emit(!this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() {}

  ngOnInit(): void {}
}
