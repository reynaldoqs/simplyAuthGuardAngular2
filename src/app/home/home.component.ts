import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audi-home',
  template: `
    <h2>
      Home Page
    </h2>
  `,
  styles: [
    `
    h2{
      font-family:'Roboto',sans-serif;
      color:#34f243;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
