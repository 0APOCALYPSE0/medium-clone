import { currentUserAction } from './auth/store/actions/current-user.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.store.dispatch(currentUserAction());
  }

}
