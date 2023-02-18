import { CurrentUserEffect } from './store/effects/current-user.effect';
import { LoginEffect } from './store/effects/login.effect';
import { PersistanceService } from '../shared/services/persistance/persistance.service';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { RegisterEffect } from './store/effects/register.effect';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { reducers } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature("auth", reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, CurrentUserEffect]),
  ],
  providers: [AuthService, PersistanceService]
})
export class AuthModule { }
