import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss'],
})
export class ListMemberComponent implements OnInit {
  listOfData: Array<any> = [];
  constructor() {}
  titleTable = [
    'name',
    'age',
    'address',
    'checked',
    'expand',
    'description',
    'disabled',
  ];
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: i,
        address: `Item`,
        checked: true,
        expand: false,
        description: 'none',
        disabled: false,
      });
    }
  }
}
