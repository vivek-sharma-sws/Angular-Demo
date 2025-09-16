import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-audiobook-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './audiobook-card.component.html',
  styleUrl: './audiobook-card.component.css'
})
export class AudiobookCardComponent {
  title = 'Audiobook';
}
