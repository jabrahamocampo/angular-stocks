import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() stock: any;
  @Input() name: number;
  
  //isNegative()
  isNegative(){
    console.log("*** in negative method ***");
  	return (this.stock && this.stock.change < 0);
  }
  
  //isPositive()
  isPositive(){
  	console.log("*** in positive method ***");
  	return (this.stock && this.stock.change > 0);
  }

}
