import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-instant-speech-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './instant-speech-card.component.html',
  styleUrl: './instant-speech-card.component.css'
})
export class InstantSpeechCardComponent {
  title = 'Instant Speech';
}
