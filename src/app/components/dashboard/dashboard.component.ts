import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'stocks';
  stocks: Array<StockInterface>;
  symbols: Array<string>;
  name: string = "=Jose Abraham=";

  constructor(private service: StocksService) { 
  	/*service.load(['AAPL']).subscribe(stocks => {
	    console.log(stocks);
		this.stocks = stocks;
	});*/
	
	this.symbols = service.get();
	console.log("CONSTRUCTOR");
  }

  ngOnInit() {
   console.log("ON INIT()");
  	this.service.load(this.symbols)
  		.subscribe(stocks => {
  					this.stocks = stocks;
  				});
  }

}
