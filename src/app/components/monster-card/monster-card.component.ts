import { Component, Input } from '@angular/core';

@Component({
  selector: 'monster-card',
  standalone: true,
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.css']
})
export class MonsterCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
}
