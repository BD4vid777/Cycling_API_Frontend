import { Component, OnInit } from '@angular/core';
import { EndpointsService } from "../../services/endpoints.service";

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.sass']
})
export class RidersComponent implements OnInit {

  displayedColumns = ['position', 'country', 'name', 'pointPer', 'points', 'raceDays'];
  // @ts-ignore
  dataSource: any[];

  constructor(private endpointsService: EndpointsService) {
    this.getRiders("/riders")
  }

  ngOnInit(): void {
  }

  getRiders(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response: any) => {
        this.dataSource = response
      })
  }
}
