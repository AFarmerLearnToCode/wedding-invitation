import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  celebrationDate = new Date("Jun 8, 2025 00:00:00");

  constructor() { }

  ngOnInit(): void {
  }


}
