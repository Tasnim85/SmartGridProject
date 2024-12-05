import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  tiles = [
    { text: 'Analytics overall', cols: 1, rows: 1, color: 'white', iconClass: 'vsm-icon pe-7s-home', route: '/overall' },
    { text: 'Tag machine analytics', cols: 1, rows: 1, color: 'white', iconClass: 'vsm-icon pe-7s-settings', route: '/tag_machine' },
    { text: 'Tag room analytics', cols: 1, rows: 1, color: 'white', iconClass: 'vsm-icon pe-7s-users', route: '/tag_room' },
    { text: 'Tag warehouse analytics', cols: 1, rows: 1, color: 'white', iconClass: 'vsm-icon pe-7s-graph1', route: '/tag_warehouse' },
    { text: 'Alerts', cols: 1, rows: 1, color: 'white', iconClass: 'vsm-icon pe-7s-attention', route: '/alerts' },
    { text: 'Recommendations', cols: 1, rows: 1, color: 'white', iconClass: 'vsm-icon pe-7s-like', route: '/recommendations' }
  ];
  
  ngOnInit(): void {}
}
