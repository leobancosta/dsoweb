import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brandLogoPath: string;

  constructor() { }

  ngOnInit() {
    this.brandLogoPath = 'assets/images/dxc_logo_hz_wht_rgb.png'
  }

}
