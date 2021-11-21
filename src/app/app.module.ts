import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ApiOverviewComponent } from './api-overview/api-overview.component';
import { ApiGuideComponent } from './api-guide/api-guide.component';
import { ApiUsageComponent } from './api-usage/api-usage.component';
import { ApiSupportComponent } from './api-support/api-support.component';
import { ApiSidenavComponent } from './api-sidenav/api-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiOverviewComponent,
    ApiGuideComponent,
    ApiUsageComponent,
    ApiSupportComponent,
    ApiSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
