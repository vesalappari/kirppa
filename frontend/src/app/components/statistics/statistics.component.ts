import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  productsSold: number = 6;
  productsSoldPrice: number = 90;
  unsoldProducts: number = 4;
  unsoldProductsPrice: number = 105;
  costOfTable: number = 35;
  totalPriceOfProducts: number = this.productsSoldPrice + this.unsoldProductsPrice;

  salesRevenue: number | undefined;
  profitWithTable: number | undefined;
  soldPercentageByCount: number | undefined;
  soldPercentageByPrice: number | undefined;

  ngOnInit() {
    this.salesRevenue = this.productsSoldPrice;
    this.profitWithTable = this.salesRevenue - this.costOfTable;
    this.soldPercentageByCount = (this.productsSold / (this.productsSold + this.unsoldProducts)) * 100;
    this.soldPercentageByPrice = (this.productsSoldPrice / this.totalPriceOfProducts) * 100;
  }
}
