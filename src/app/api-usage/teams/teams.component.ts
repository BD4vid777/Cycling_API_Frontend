import { Component, OnInit } from '@angular/core';
import {EndpointsService} from "../../services/endpoints.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.sass']
})
export class TeamsComponent implements OnInit {

  displayedColumns = ['position', 'before', 'country', 'name', 'class'];
  // @ts-ignore
  dataSource: any[];

  constructor(private endpointsService: EndpointsService) {
    this.getTeams("/teams")
  }

  ngOnInit(): void {

  }

  getTeams(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response: any) => {
        this.dataSource = response
      })
  }

}
