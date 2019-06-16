import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'admin-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class AdminSideMenuComponent implements OnInit {
  public samplePagesCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
