import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.sass']
})
export class ApiUsageComponent implements OnInit {

  teamShortUrlToSend: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  teamToDisplay(teamShortUrl: string) {
    this.teamShortUrlToSend = teamShortUrl
    console.log(this.teamShortUrlToSend)
  }
}
