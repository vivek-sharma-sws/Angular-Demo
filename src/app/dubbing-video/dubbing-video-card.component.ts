import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dubbing-video-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dubbing-video-card.component.html',
  styleUrl: './dubbing-video-card.component.css'
})
export class DubbingVideoCardComponent {
  title = 'Dubbed Video';
}
