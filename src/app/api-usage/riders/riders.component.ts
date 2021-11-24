import { Component, OnInit } from '@angular/core';
import { EndpointsService } from "../../services/endpoints.service";

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.sass']
})
export class RidersComponent implements OnInit {
  riders: any[] = [];

  constructor(private endpointsService: EndpointsService) {
    this.getRiders("/riders")
  }

  ngOnInit(): void {
  }

  getRiders(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response:any) => this.riders = response.data)
  }
}
