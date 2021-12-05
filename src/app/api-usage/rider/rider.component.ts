import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { EndpointsService } from "../../services/endpoints.service";
import {MatDialog} from "@angular/material/dialog";
import {TopDialogComponent} from "./dialogs/top-dialog/top-dialog.component";
import {RankingsDialogComponent} from "./dialogs/rankings-dialog/rankings-dialog.component";
import {TeamsDialogComponent} from "./dialogs/teams-dialog/teams-dialog.component";

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.sass']
})
export class RiderComponent implements OnInit {
  rider: any[] = []
  ridersName: string = ''
  ridersPhotoUrl: string = ''
  rankings: any[] = []
  teams: any[] = []

  @Input() riderShortUrlUpdated = ''
  @Output() teamToShow = new EventEmitter<string>()

  constructor(private endpointsService: EndpointsService, public dialog: MatDialog) {
    this.getRider("/riders/mathieu-van-der-poel")
  }

  ngOnChanges() {
    if (this.riderShortUrlUpdated !== '') {
      this.getRider("/riders/" + this.riderShortUrlUpdated)
    }
  }

  ngOnInit(): void {
  }

  getRider(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response:any) => this.rider = response)
  }

  showRidersTeam(teamName: string) {
    const year = new Date().getFullYear()
    const teamShort = teamName.toLowerCase().replace('é','e').replace('é','e').replace('&',' ').replace('ë','e').replace(' / ','-').replace('/','').replace(',','').replace(' - ',' ').replace(' - ',' ').trim().split(' ').join('-')
    const teamShortUrl = teamShort + "-" + year
    this.teamToShow.emit(teamShortUrl)
  }

  openTop() {
    this.dialog.open(TopDialogComponent,
      {
        data: this.rider
      });
  }

  getValuesForDialogs() {
    const riderKeysValues = Object.values(this.rider)
    const data = riderKeysValues[0]
    this.ridersName = data["Main info"].name
    this.ridersPhotoUrl = data["Main info"]["riders photo url"]
    this.rankings = data["PCS Ranking position per season"]
    this.teams = data["Teams"]
  }

  openRankings() {
    this.getValuesForDialogs()
    this.dialog.open(RankingsDialogComponent,
      {
        data: {
          ridersName: this.ridersName,
          ridersPhotoUrl: this.ridersPhotoUrl,
          rankings: this.rankings
        }
      })
  }

  openTeams() {
    this.getValuesForDialogs()
    this.dialog.open(TeamsDialogComponent,
      {
        data: {
          ridersName: this.ridersName,
          ridersPhotoUrl: this.ridersPhotoUrl,
          teams: this.teams
        }
      })
  }
}
