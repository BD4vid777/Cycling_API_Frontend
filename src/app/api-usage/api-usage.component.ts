import { Component, OnInit } from '@angular/core';
import { EndpointsService } from "../services/endpoints.service";

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.sass']
})
export class ApiUsageComponent implements OnInit {

  teams: any[] = [];

  constructor(private endpointsService: EndpointsService) {
    this.getTeams("/teams")
  }

  ngOnInit(): void {
  }

  getTeams(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response: any) => this.teams = response.data)
  }

}
