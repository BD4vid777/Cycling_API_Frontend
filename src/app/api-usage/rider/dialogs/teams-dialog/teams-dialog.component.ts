import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-teams-dialog',
  templateUrl: './teams-dialog.component.html',
  styleUrls: ['./teams-dialog.component.sass']
})
export class TeamsDialogComponent implements OnInit {
  teams: any[] = []
  ridersName: string = ''
  ridersPhotoUrl : string = ''

  displayedColumns = ['year','team', 'teamClass']

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.teams = data.teams
    this.ridersName = data.ridersName
    this.ridersPhotoUrl = data.ridersPhotoUrl
  }

  ngOnInit(): void {
  }

}
