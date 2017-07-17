import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private _router:Router){}
 private state:boolean=false;
 isLoggedIn():boolean{
   return this.state;
 }
  changeState():void{
    this.state=!this.state;
    if(!this.state)this._router.navigateByUrl('/home');
  }
}
