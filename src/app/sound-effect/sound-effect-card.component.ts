import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sound-effect-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sound-effect-card.component.html',
  styleUrl: './sound-effect-card.component.css'
})
export class SoundEffectCardComponent {
  title = 'Sound Effects';
}
