import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'audi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _authService:AuthService){}
  state:boolean;
  changeState():void{
    this._authService.changeState();
    this.state = this._authService.isLoggedIn();
  }
  ngOnInit():void{
    this.state = this._authService.isLoggedIn();
  }
}
