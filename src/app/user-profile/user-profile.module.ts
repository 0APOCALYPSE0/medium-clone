import { FeedModule } from './../shared/modules/feed/feed.module';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { UserProfileEffect } from './store/effects/user-profile.effect';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileService } from './services/user-profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FeedModule,
    StoreModule.forFeature('user-profile', reducers),
    EffectsModule.forFeature([UserProfileEffect])
  ],
  providers: [UserProfileService]
})
export class UserProfileModule { }
