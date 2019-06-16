import {Component, OnInit} from '@angular/core';

// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [NgbDropdownConfig]
})
export class AdminHeaderComponent implements OnInit {
  public sidebarOpened = false;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  /*constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }*/
  constructor() {
  }
  ngOnInit() {
  }
}
