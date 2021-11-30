import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-guide',
  templateUrl: './api-guide.component.html',
  styleUrls: ['./api-guide.component.sass']
})
export class ApiGuideComponent implements OnInit {

  codeSample: string = "" +
    "var axios = require(\"axios\").default;\n" +
    "\n" +
    "var options = {\n" +
    "  method: 'GET',\n" +
    "  url: 'https://pro-cycling-stats.p.rapidapi.com/riders/julian-alaphilippe',\n" +
    "  headers: {\n" +
    "    'x-rapidapi-host': 'pro-cycling-stats.p.rapidapi.com',\n" +
    "    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'\n" +
    "  }\n" +
    "};\n" +
    "\n" +
    "axios.request(options).then(function (response) {\n" +
    "\tconsole.log(response.data);\n" +
    "}).catch(function (error) {\n" +
    "\tconsole.error(error);\n" +
    "});"
  cloneRepo: string = "git clone https://github.com/BD4vid777/Cycling_API.git"

  constructor() { }

  ngOnInit(): void {
  }

}
