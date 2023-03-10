import { Router } from '@angular/router';
import { PersistanceService } from './../../../shared/services/persistance/persistance.service';
import { tap } from 'rxjs/operators';
import { logoutAction } from './../actions/sync.action';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";

@Injectable()
export class LogoutEffect {

  constructor(private actions$:Actions, private persistanceService:PersistanceService, private router:Router) {}

  logout$ = createEffect(() => this.actions$.pipe(ofType(logoutAction), tap(() => {
    this.persistanceService.set('accessToken', '');
    this.router.navigate(['/']);
  })), { dispatch: false});
}