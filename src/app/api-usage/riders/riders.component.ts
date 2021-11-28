import {Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  searchValueRiders: string = '';

  constructor(private endpointsService: EndpointsService) {
  }

  ngOnInit(): void {
    this.getRiders("/riders")
  }

  getRiders(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response: any) => {
        this.dataSource = response
      })
  }

  @Output() riderToDisplay = new EventEmitter<string>();

  showRider(shortUrl: string) {
    this.riderToDisplay.emit(shortUrl)
  }
}
