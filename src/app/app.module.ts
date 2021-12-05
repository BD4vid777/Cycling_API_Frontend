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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import {MatStepperModule} from "@angular/material/stepper";
import { TopDialogComponent } from './api-usage/rider/dialogs/top-dialog/top-dialog.component';
import { RankingsDialogComponent } from './api-usage/rider/dialogs/rankings-dialog/rankings-dialog.component';
import { TeamsDialogComponent } from './api-usage/rider/dialogs/teams-dialog/teams-dialog.component';

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
    TeamComponent,
    SearchfilterPipe,
    TopDialogComponent,
    RankingsDialogComponent,
    TeamsDialogComponent
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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
