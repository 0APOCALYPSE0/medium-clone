import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { RegisterRequest } from './../../types/registerRequest.interface';
import { isSubmitSelector, validationErrorsSelector } from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions/register.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  isSubmit$!:Observable<boolean>;
  errors$!: Observable<BackendErrors | null>;

  constructor(private formBuilder:FormBuilder, private store:Store) {}

  ngOnInit(): void {
    this.createForm();
    this.isSubmit$ = this.store.pipe(select(isSubmitSelector));
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
    console.log(this.isSubmit$);
  }

  createForm(): void{
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void{
    console.log("forms values ", this.registerForm.value);
    const registerReq:RegisterRequest = {
      user: this.registerForm.value
    }
    this.store.dispatch(registerAction({ request: registerReq }));
  }

}
