import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.sass']
})
export class MainSectionComponent implements OnInit {

  @Input()
  celebrationDate = new Date("Jun 8, 2025 00:00:00");

  daysRemaining = 0;
  hoursRemaining = 0;
  minutesRemaining = 0;
  secondsRemaining = 0;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.updateRemainingTime();

    }, 1000)
  }

  get timeToTheDay() {
    return this.celebrationDate.getTime() - new Date().getTime();
  }

  private updateRemainingTime() {
    this.daysRemaining = Math.floor(this.timeToTheDay / (1000 * 60 * 60 * 24));
    this.hoursRemaining = Math.floor((this.timeToTheDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesRemaining = Math.floor((this.timeToTheDay % (1000 * 60 * 60)) / (1000 * 60));
    this.secondsRemaining = Math.floor((this.timeToTheDay % (1000 * 60)) / 1000);
  }

}
