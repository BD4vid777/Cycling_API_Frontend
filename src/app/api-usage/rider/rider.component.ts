import { Component, OnInit } from '@angular/core';
import { EndpointsService } from "../../services/endpoints.service";

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.sass']
})
export class RiderComponent implements OnInit {
  rider: any[] = [];

  constructor(private endpointsService: EndpointsService) {
    this.getRider("/riders/mathieu-van-der-poel")
  }

  ngOnInit(): void {
  }

  getRider(endpoint: string) {
    this.endpointsService.getData(endpoint)
      .subscribe((response:any) => this.rider = response)
  }
}
