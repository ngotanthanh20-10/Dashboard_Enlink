import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { data } from '../../interface/data';

@Component({
  selector: 'loy-dashboard-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  listOfData: Array<data> = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: i,
        address: `Ngo Tan Thanh`,
      });
    }
  }
}
