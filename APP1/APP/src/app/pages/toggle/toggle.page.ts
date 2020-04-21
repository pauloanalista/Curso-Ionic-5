import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {

  marcado: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
