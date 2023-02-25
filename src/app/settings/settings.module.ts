import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from './../shared/modules/backend-error-messages/backend-error-messages.module';
import { reducers } from './../auth/store/reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    BackendErrorMessagesModule,
    ReactiveFormsModule,
    StoreModule.forFeature('settings', reducers)
  ]
})
export class SettingsModule { }
