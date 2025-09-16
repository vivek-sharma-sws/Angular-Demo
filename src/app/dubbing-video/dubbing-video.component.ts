import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dubbing-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dubbing-video.component.html',
  styleUrl: './dubbing-video.component.css'
})
export class DubbingVideoComponent {
  title = 'Dubbed Video';
}
