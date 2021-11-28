import {Component, Output, EventEmitter, OnInit} from '@angular/core';
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
  searchValue: string = '';

  constructor(private endpointsService: EndpointsService) {  }

  ngOnInit() {
    this.getTeams("/teams")
  }

  getTeams(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response: any) => {
        this.dataSource = response
      })
  }

  @Output() teamToDisplay = new EventEmitter<string>();

  showTeam(shortUrl: string) {
    this.teamToDisplay.emit(shortUrl)
  }
}
