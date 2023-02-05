import { BackendErrors } from './../../../../types/backendErrors.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors!:BackendErrors | null;
  errorMessages!:string[];

  ngOnInit(): void{
    if(this.backendErrors){
      this.errorMessages = this.backendErrors && Object.keys(this.backendErrors).map((name:string) => {
        const message = this.backendErrors && this.backendErrors[name].join(' ');
        return `${name} ${message}`;
      })
    }
  }
}
