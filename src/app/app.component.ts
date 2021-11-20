import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.loadData()
  }

  teams: any[] = [];

  private headersDict = {
    'x-rapidapi-host': 'pro-cycling-stats.p.rapidapi.com',
    'x-rapidapi-key': 'ff2d4f0c13msh355a37b334e3357p1b3479jsnc0bc78225888'
  };
  private requestOptions = {
    headers: new HttpHeaders(this.headersDict)
  };

    loadData() {
      this.http.get(`https://pro-cycling-stats.p.rapidapi.com/teams`, this.requestOptions)
        .subscribe((response: any) => {
          this.teams = response;
        })
    }
}
