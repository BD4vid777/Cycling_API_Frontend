import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { EndpointsService } from "../../services/endpoints.service";

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.sass']
})
export class RiderComponent implements OnInit {
  rider: any[] = [];

  @Input() riderShortUrlUpdated = ''
  @Output() teamToShow = new EventEmitter<string>()

  constructor(private endpointsService: EndpointsService) {
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
}
