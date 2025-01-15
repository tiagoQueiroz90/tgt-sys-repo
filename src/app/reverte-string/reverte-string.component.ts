import { Component } from '@angular/core';

@Component({
  selector: 'app-reverte-string',
  templateUrl: './reverte-string.component.html',
  styleUrls: ['./reverte-string.component.css']
})
export class ReverteStringComponent {
  inputString: string = '';
  invertedString: string = '';

  inverterString(): void {
    let result = '';
    for (let i = this.inputString.length - 1; i >= 0; i--) {
      result += this.inputString[i];
    }
    this.invertedString = result;
  }
}
