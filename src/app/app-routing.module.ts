import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiOverviewComponent } from "./api-overview/api-overview.component";
import { ApiGuideComponent } from "./api-guide/api-guide.component";
import { ApiUsageComponent } from "./api-usage/api-usage.component";
import { ApiSupportComponent } from "./api-support/api-support.component";

const routes: Routes = [
  { path: '', component: ApiOverviewComponent},
  { path: 'guide', component: ApiGuideComponent},
  { path: 'usage', component: ApiUsageComponent},
  { path: 'support', component: ApiSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
