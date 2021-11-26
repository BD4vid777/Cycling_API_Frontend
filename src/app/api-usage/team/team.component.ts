import {Component, Input, OnInit} from '@angular/core';
import {EndpointsService} from "../../services/endpoints.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  team: any[] = [];

  @Input() teamShortUrlUpdated = ''

  constructor(private endpointsService: EndpointsService) {
    this.getTeam("/teams/deceuninck-quick-step-2021")
  }

  ngOnChanges() {
    if (this.teamShortUrlUpdated !== '') {
      this.getTeam("/teams/" + this.teamShortUrlUpdated)
    }
  }

  ngOnInit(): void {
  }

  getTeam(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response:any) => this.team = response)
  }
}
