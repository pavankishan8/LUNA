import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  typedValue: string = '';
  values: string[] = [];

  addValue() {
    if (this.typedValue.trim() !== '') {
      this.values.push(this.typedValue);
      this.typedValue = '';
    }
  }

  paragraph = 'Shah Rukh Khan';

  userInput = '';
  startTime: Date;
  endTime: Date;
  elapsedTime: number;

  onInputChange() {
    if (this.userInput === this.paragraph) {
      this.endTime = new Date();
      this.calculateElapsedTime();
    }
  }

  calculateElapsedTime() {
    const startMilliseconds = this.startTime.getTime();
    const endMilliseconds = this.endTime.getTime();
    this.elapsedTime = (endMilliseconds - startMilliseconds) / 1000;
  }

  startTimer() {
    this.startTime = new Date();
  }
  
}
