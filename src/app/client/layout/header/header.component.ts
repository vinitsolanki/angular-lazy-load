import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [NgbDropdownConfig]
})
export class ClientHeaderComponent implements OnInit {
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
