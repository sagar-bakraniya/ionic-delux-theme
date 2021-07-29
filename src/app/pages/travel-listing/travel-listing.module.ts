import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelListingPageRoutingModule } from './travel-listing-routing.module';

import { TravelListingPage } from './travel-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelListingPageRoutingModule
  ],
  declarations: [TravelListingPage]
})
export class TravelListingPageModule {}
