import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable()//{providedIn: 'root'}
//eger injecti burada olmasaydi app.module.ts icinde providers arrayine eklenmeliydi.
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }
  error(message:string){
    alertify.error(message)
  }
  warning(message:string){
    alertify.error(message)
  }


}
