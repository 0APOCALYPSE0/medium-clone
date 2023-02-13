import { isLoggedInSelector, isAnonymousSelector, currentUserSelector } from './../../../../../auth/store/selectors';
import { select, Store } from '@ngrx/store';
import { CurrentUser } from './../../../../types/currentUser.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUser | null>;

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
