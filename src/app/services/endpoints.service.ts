import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-host': 'pro-cycling-stats.p.rapidapi.com',
    'x-rapidapi-key': environment.RAPID_API_KEY
  })
}

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private apiUrl = "https://pro-cycling-stats.p.rapidapi.com"

  constructor(private http: HttpClient) { }

  getData(endpoint: string) {
    return this.http.get(this.apiUrl + endpoint, httpOptions)
  }
}
