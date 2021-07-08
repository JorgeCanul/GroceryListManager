import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Grocery List Manager';
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    console.log('Hello im toggle');
  }
}
