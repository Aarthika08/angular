// src/app/counter.component.ts

import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Counter: {{ count }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>

      <div>
        <label for="newCount">Set Count:</label>
        <!-- <input type="number" id="newCount" [(ngModel)]="newCount"> -->
        <button (click)="setCount()">Set</button>
      </div>
    </div>
  `,
})
export class CounterComponent {
  count: number;
  newCount: number = 0;

  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount();
  }

  increment() {
    this.counterService.increment();
    this.count = this.counterService.getCount();
  }

  decrement() {
    this.counterService.decrement();
    this.count = this.counterService.getCount();
  }

  setCount() {
    this.counterService.setCount(this.newCount);
    this.count = this.counterService.getCount();
    this.newCount = 0; // Reset input field after setting count
  }
}
