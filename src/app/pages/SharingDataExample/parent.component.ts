import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-parent',
  template: `
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  </div>
  {{message}}
  `
})
export class ParentComponent implements OnInit {

  title = 'Parent Component';
  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
