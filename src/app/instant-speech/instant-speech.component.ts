import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instant-speech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instant-speech.component.html',
  styleUrl: './instant-speech.component.css'
})
export class InstantSpeechComponent {
  title = 'Instant Speech';
}
