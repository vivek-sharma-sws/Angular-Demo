import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-music-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.css'
})
export class MusicCardComponent {
  title = 'Music';
}
