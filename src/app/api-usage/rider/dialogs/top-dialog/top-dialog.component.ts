import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TeamsDialogComponent} from "../teams-dialog/teams-dialog.component";
import {RankingsDialogComponent} from "../rankings-dialog/rankings-dialog.component";

@Component({
  selector: 'app-top-dialog',
  templateUrl: './top-dialog.component.html',
  styleUrls: ['./top-dialog.component.sass']
})
export class TopDialogComponent implements OnInit {

  riderData: any[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: any[],
              public dialogRef: MatDialogRef<TopDialogComponent>,
              public dialog: MatDialog) {
    this.riderData = data
  }

  ngOnInit(): void {
  }


  openRankings() {
    this.dialog.open(RankingsDialogComponent,
      {
        data: this.riderData
      })
    this.dialogRef.close()
  }

  openTeams() {
    this.dialog.open(TeamsDialogComponent,
      {
        data: this.riderData
      })
    this.dialogRef.close()
  }
}
