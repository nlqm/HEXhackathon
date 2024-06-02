import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}
