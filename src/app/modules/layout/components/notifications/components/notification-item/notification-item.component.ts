import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Notification } from '../../interface';

@Component({
  selector: 'loy-dashboard-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {

  @Input('data') data: Notification = {}
  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.data.icon = this.sanitizer.bypassSecurityTrustHtml(this.data.icon)
  }

}
