import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EndpointsService } from "../services/endpoints.service";

@Component({
  selector: 'app-endpoint-dialog',
  templateUrl: './endpoint-dialog.component.html',
  styleUrls: ['./endpoint-dialog.component.sass']
})
export class EndpointDialogComponent implements OnInit {

  formatted:string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private endpointsService: EndpointsService) {
    this.loadData()
  }

  ngOnInit() {

  }

  loadData() {
    this.endpointsService.getData(this.data)
      .subscribe((data: any) => {
        this.formatted = JSON.stringify(data, null, 2);
      })
  }



}



