import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audiobook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audiobook.component.html',
  styleUrl: './audiobook.component.css'
})
export class AudiobookComponent {
  title = 'Audiobook';
}
