import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonsterCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrección aquí
})
export class AppComponent {
  title = 'first-project';
}
