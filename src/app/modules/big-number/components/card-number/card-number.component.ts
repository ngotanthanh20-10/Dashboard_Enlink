import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CardNumber } from '../../interface';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'loy-dashboard-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.scss']
})

export class CardNumberComponent implements OnInit {
  @Input() data: CardNumber = {}


  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.data.icon = this.sanitizer.bypassSecurityTrustHtml(this.data.icon)
  }



}
