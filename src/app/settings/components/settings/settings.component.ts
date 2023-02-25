import { logoutAction } from './../../../auth/store/actions/sync.action';
import { CurrentUserInput } from './../../../shared/types/current-user-input.interface';
import { updateCurrentUserAction } from './../../../auth/store/actions/update-current-user.action';
import { isSubmittingSelector, validationErrorsSelector } from './../../store/selectors';
import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { CurrentUser } from 'src/app/shared/types/currentUser.interface';
import { currentUserSelector } from './../../../auth/store/selectors';
import { Subscription, filter, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  form!:FormGroup;
  currentUserSubscription!:Subscription | null;
  currentUser!:CurrentUser;
  isSubmitting$!:Observable<boolean>;
  errors$!:Observable<BackendErrors | null>;

  constructor(private fb:FormBuilder, private store:Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues(): void{
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
  }

  createForm(): void{
    this.form = this.fb.group({
      image: [this.currentUser.image],
      username: [this.currentUser.username],
      bio: [this.currentUser.bio],
      email: [this.currentUser.email],
      password: ['']
    });
  }

  initializeListeners(): void{
    this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter(Boolean)).subscribe((currentUser:CurrentUser) => {
      this.currentUser = currentUser;
      this.createForm();
    });
  }

  onSubmit(): void{
    if(this.form.valid){
      const currentUserInput:CurrentUserInput = {
        ...this.currentUser,
        ...this.form.value
      }
      this.store.dispatch(updateCurrentUserAction({user: currentUserInput}));
    }
  }

  logOut(): void{
    this.store.dispatch(logoutAction());
  }

  ngOnDestroy(): void {
    this.currentUserSubscription && this.currentUserSubscription.unsubscribe();
  }
}
