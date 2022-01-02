import {Component, Input, OnInit} from '@angular/core';
import {EndpointsService} from "../../services/endpoints.service";
import { MatDialog } from "@angular/material/dialog";
import { StaffDialogComponent } from "./dialogs/staff-dialog/staff-dialog.component";
import { VictoriesDialogComponent } from "./dialogs/victories-dialog/victories-dialog.component";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  team: any[] = [];
  teamName?: string;
  teamStaff?: any[];
  teamRiders?: any[];
  teamTopV?: any[];
  teamLastV?: any[];

  @Input() teamShortUrlUpdated = ''

  constructor(private endpointsService: EndpointsService, public dialog: MatDialog) {
    // this.getTeam("/teams/quick-step-alpha-vinyl-2022")
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

  getValuesForDialogs() {
    const teamKeysValues = Object.values(this.team)
    const data = teamKeysValues[0]
    this.teamName = data["Main info"].name
    this.teamStaff = data["staff"]
    this.teamRiders = data["teamRiders"]
    this.teamTopV = data["topResults"]
    this.teamLastV = data["lastVictories"]
  }

  openRiders() {
    this.getValuesForDialogs()
    //TODO: Delete console.logs
    console.log(this.teamRiders)
    console.log(this.teamStaff)
    this.dialog.open(StaffDialogComponent,
      {
        data: {
          staff: this.teamStaff,
          riders: this.teamRiders
        }
      })
  }

  openVictories() {
    this.getValuesForDialogs()
    //TODO: Delete console.logs
    console.log(this.teamLastV)
    console.log(this.teamTopV)
    this.dialog.open(VictoriesDialogComponent,
      {
        data: {
          top: this.teamTopV,
          last: this.teamLastV
        }
      })
  }
}
