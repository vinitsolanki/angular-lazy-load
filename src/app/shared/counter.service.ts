import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  public counter: number = 10;

  /**
   * Getter $counter
   * @return {number }
   */
  public get $counter(): number {
    return this.counter;
  }

  /**
   * Setter $counter
   * @param {number } value
   */
  public set $counter(value: number) {
    this.counter = value;
  }


}
