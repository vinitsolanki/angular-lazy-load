import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-sibling',
  template: `
  <div class="row">
  <div class="col">
    <app-parent></app-parent>
  </div>
  <div class="col">
    <div style="text-align:center">
      <h1>
        Welcome to {{ title }}!
      </h1>
    </div>
    {{message}}
    <button (click)="newMessage()">New Message</button>
  </div>
</div>
`
})
export class SiblingComponent implements OnInit {

  title = 'Sibling Component';
  message: string;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }

}
