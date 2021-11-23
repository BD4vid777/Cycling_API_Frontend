import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EndpointDialogComponent} from "../endpoint-dialog/endpoint-dialog.component";

@Component({
  selector: 'app-api-overview',
  templateUrl: './api-overview.component.html',
  styleUrls: ['./api-overview.component.sass']
})
export class ApiOverviewComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(endpoint: string) {
    this.dialog.open(EndpointDialogComponent,
      {
        data: `${endpoint}`,
        height: '500px',
        width: '800px'
      });
  }
}
