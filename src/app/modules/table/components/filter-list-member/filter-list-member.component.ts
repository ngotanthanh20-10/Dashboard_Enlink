import { Component, OnInit } from '@angular/core';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
@Component({
  selector: 'app-filter-list-member',
  templateUrl: './filter-list-member.component.html',
  styleUrls: ['./filter-list-member.component.scss'],
})
export class FilterListMemberComponent implements OnInit {
  // data fake select start
  listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  listOfSelectedValue: string[] = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
  // data fake select end

  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }

  ngOnInit(): void {}
}
