import { CurrentUser } from 'src/app/shared/types/currentUser.interface';
import { map } from 'rxjs/operators';
import { currentUserSelector } from './../../../auth/store/selectors';
import { isLoadingSelector, errorSelector, userProfileSelector } from './../../store/selector';
import { userProfileAction } from './../../store/actions/user-profile.action';
import { Observable, Subscription, combineLatest, filter } from 'rxjs';
import { UserProfile } from './../../types/user-profile.interface';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile!:UserProfile | null;
  isLoading$!:Observable<boolean>;
  error$!:Observable<string | null>;
  slug!:string | null;
  userProfileSubscription!:Subscription | null;
  isCurrentUserProfile$!:Observable<boolean>;

  constructor(private store:Store, private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues(): void{
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isCurrentUserProfile$ = combineLatest([this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))])
      .pipe(map(([ currentUser, userProfile ]: [CurrentUser, UserProfile]) => {
        return currentUser.username === userProfile.username;
    }))
  }

  getApiUrl(): string{
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
  }

  initializeListeners(): void{
    this.userProfileSubscription = this.store.pipe(select(userProfileSelector)).subscribe({
      next: (userProfile:UserProfile | null) => {
        this.userProfile = userProfile;
    }})

    this.route.params.subscribe((params:Params) => {
      this.slug = params['slug'];
      this.fetchProfile();
    })
  }

  fetchProfile(): void{
    this.store.dispatch(userProfileAction({slug: this.slug ? this.slug : ''}));
  }

  ngOnDestroy(): void {
    this.userProfileSubscription && this.userProfileSubscription.unsubscribe();
  }

}
