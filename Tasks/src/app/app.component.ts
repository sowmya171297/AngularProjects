import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  inputText: string = '';
  result: string = '';
  count: number = 10;
  series: number[] = [];

  generateFibonacci() {
    let a = 0, b = 1, next;
    this.series = [a, b];

    for (let i = 2; i < this.count; i++) {
      next = a + b;
      this.series.push(next);
      a = b;
      b = next;
    }
  }

  checkPalindrome() {
    const cleanedText = this.inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');
    this.result = cleanedText === reversedText ? 'Palindrome' : 'Not a Palindrome';
  }
}
