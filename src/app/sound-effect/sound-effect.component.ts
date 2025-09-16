import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sound-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sound-effect.component.html',
  styleUrl: './sound-effect.component.css'
})
export class SoundEffectComponent {
  title = 'Sound Effects';
}
