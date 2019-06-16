import {Component} from '@angular/core';
import {CounterService} from '../../shared/counter.service';

@Component({
  selector: 'app-eager2',
  template: `
  <p>Counter : {{counter}}</p>
  <p>Service Counter : {{counterService.$counter}}</p>
  <button (click)="increaseCounter()">Increase Counter</button>
  <button (click)="increaseCounterFromService()">Increase Counter from Service</button>
  `
})
export class EagerComponent2 {
  counter: number;

  ngOnInit() {
  }

  constructor(public counterService: CounterService) {
    this.counter = this.counterService.$counter;
  }

  increaseCounter() {
    this.counter += 1;
  }

  increaseCounterFromService() {
    this.counterService.$counter += 1;
  }
}
