import { Component } from '@angular/core';

@Component({
  selector: 'selector-name',
  template: `
    <section>
      <nav>
        <a routerLink="./page-1">Page 1</a>
        <a routerLink="./page-2">Page 2</a>
        <a routerLink="./page-3">Page 3</a>
        <a routerLink="./demo">Demo</a>
        <a routerLink="./signals">Signals</a>
      </nav>
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [
    `
      nav {
        display: flex;
        gap: 15px;
      }

      section {
        padding: 10px;
      }
    `,
  ],
})
export class TodosWrapperComponent {}
