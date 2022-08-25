import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loy-dashboard-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {

  listOfData: any[] = [
    {
      key: '1',
      Product: 'Gray Sofa',
      Sales: 81,
      Earning: '$1,912.00',
      StockLeft: '82',
      color: 'rgb(5, 201, 167)',
      image: 'assets/images/others/thumb-9.jpg'
    },
    {
      key: '1',
      Product: 'Beat Headphone',
      Sales: 26,
      Earning: '$1,377.00',
      StockLeft: '61',
      color: 'rgb(5, 201, 167)',
      image: 'assets/images/others/thumb-10.jpg'
    },
    {
      key: '1',
      Product: 'Wooden Rhino',
      Sales: 71,
      Earning: '$9,212.00',
      StockLeft: '23',
      color: 'rgb(222, 68, 54)',
      image: 'assets/images/others/thumb-11.jpg'
    },
    {
      key: '1',
      Product: 'Red Chair',
      Sales: 79,
      Earning: '$1,298.00',
      StockLeft: '54',
      color: 'rgb(255, 193, 7)',
      image: 'assets/images/others/thumb-12.jpg'
    },
    {
      key: '1',
      Product: 'Wristband',
      Sales: 60,
      Earning: '$7,376.00',
      StockLeft: '76',
      color: 'rgb(5, 201, 167)',
      image: 'assets/images/others/thumb-13.jpg'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
