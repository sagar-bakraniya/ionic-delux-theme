import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelListingPage } from './travel-listing.page';

const routes: Routes = [
  {
    path: '',
    component: TravelListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelListingPageRoutingModule {}
