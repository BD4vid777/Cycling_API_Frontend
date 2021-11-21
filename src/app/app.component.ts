import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.loadData()
  }

  title: string = 'Hello'

  teams: any[] = [];

  private headersDict = {
    'x-rapidapi-host': 'pro-cycling-stats.p.rapidapi.com',
    'x-rapidapi-key': environment.RAPID_API_KEY
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
