import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../shared/counter.service';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {

  counter: number;
  message: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.changeMessage('Hello from Lazyyyyy');
  }
  constructor(public counterService: CounterService, private data: DataService) {
    this.counter = this.counterService.$counter;
  }

  increaseCounter() {
    this.counter += 1;
  }

  increaseCounterFromService() {
    this.counterService.$counter += 1;
  }
}
