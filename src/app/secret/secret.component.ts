import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audi-secret',
  template: `
    <h2>
      Secret Page
    </h2>
  `,
  styles: [
  `
    h2{
      font-family:'Roboto',sans-serif;
      color:#f35534;
    }
  `
  ]
})
export class SecretComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
