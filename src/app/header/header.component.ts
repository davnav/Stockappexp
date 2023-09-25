import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  options;
  url;


  constructor(private httpclient: HttpClient) {
    this.options = {
      headers: {
        method: 'GET',
        'X-RapidAPI-Key': 'iB5FQChXnCFwGHhh4lUThWJS1OI43WWG',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
      }
    };

    this.url = 'https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact';
  }
  // ngOninit(): void {


  //   this.options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'iB5FQChXnCFwGHhh4lUThWJS1OI43WWG',
  //       'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  //     }
  //   };
  // }

  get_stock_data() {
    this.httpclient.get(this.url, this.options).subscribe((res) => {
      console.log(res);
    });
  }


};
