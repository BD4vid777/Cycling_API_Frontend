import { Component, OnInit } from '@angular/core';
import { EndpointsService } from "../services/endpoints.service";

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.sass']
})
export class ApiUsageComponent implements OnInit {

  teams: any[] = [];
  team: any[] = [];
  riders: any[] = [];
  rider: any[] = [];


  constructor(private endpointsService: EndpointsService) { }

  ngOnInit(): void {
  }

  getTheData(endpoint: string, dataset: any[]) {
    this.endpointsService.getData(endpoint)
      .subscribe((response: any) => dataset = response.data)
  }

}
