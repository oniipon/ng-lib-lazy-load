import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
      <p>
      my-lib works!
      aaaaa
      </p>
      <a [routerLink]="'/hoge'">hoge</a>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
