import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-rankings-dialog',
  templateUrl: './rankings-dialog.component.html',
  styleUrls: ['./rankings-dialog.component.sass']
})
export class RankingsDialogComponent implements OnInit {
  rankings: any[] = []
  ridersName: string = ''
  ridersPhotoUrl : string = ''

  displayedColumns = ['year', 'points', 'ranking']

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.rankings = data.rankings
    this.ridersName = data.ridersName
    this.ridersPhotoUrl = data.ridersPhotoUrl
  }

  ngOnInit(): void {
  }

}
