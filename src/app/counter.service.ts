// src/app/counter.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count: number = 0;

  getCount(): number {
    return this.count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  setCount(newCount: number) {
    this.count = newCount;
  }
}
