import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { LoginRequest } from './../../types/loginRequest.interface';
import { isSubmitSelector, validationErrorsSelector } from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  isSubmit$!:Observable<boolean>;
  errors$!: Observable<BackendErrors | null>;

  constructor(private formBuilder:FormBuilder, private store:Store) {}

  ngOnInit(): void {
    this.createForm();
    this.isSubmit$ = this.store.pipe(select(isSubmitSelector));
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
  }

  createForm(): void{
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void{
    const loginReq:LoginRequest = {
      user: this.loginForm.value
    }
    this.store.dispatch(loginAction({ request: loginReq }));
  }

}
