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
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import { EndpointDialogComponent } from './endpoint-dialog/endpoint-dialog.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatGridListModule} from "@angular/material/grid-list";
import { TeamsComponent } from './api-usage/teams/teams.component';
import { RidersComponent } from './api-usage/riders/riders.component';
import { RiderComponent } from './api-usage/rider/rider.component';
import { TeamComponent } from './api-usage/team/team.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    ApiOverviewComponent,
    ApiGuideComponent,
    ApiUsageComponent,
    ApiSupportComponent,
    ApiSidenavComponent,
    EndpointDialogComponent,
    TeamsComponent,
    RidersComponent,
    RiderComponent,
    TeamComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatTabsModule,
        MatDialogModule,
        MatTooltipModule,
        ClipboardModule,
        MatGridListModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
