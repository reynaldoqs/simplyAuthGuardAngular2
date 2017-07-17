import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
  constructor(private _authService:AuthService,private _router:Router){}
  canActivate(){
    if(this._authService.isLoggedIn()){
      return true;
    }
    else{
      this._router.navigateByUrl('/home');
      return false;
    }
  }
}
