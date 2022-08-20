import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loy-dashboard-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() isCollapsed = false;
  constructor() {}

  ngOnInit(): void {}
}
