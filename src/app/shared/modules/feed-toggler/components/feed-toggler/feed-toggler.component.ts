import { isLoggedInSelector } from './../../../../../auth/store/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input() tagName!:string | null;
  isLoggedIn$!:Observable<boolean | null>;

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void{
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

}
