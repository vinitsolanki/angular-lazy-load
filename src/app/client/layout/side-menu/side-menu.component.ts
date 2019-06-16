import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'client-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class ClientSideMenuComponent implements OnInit {
  public samplePagesCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
