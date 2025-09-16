import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elevenlabs-agents-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './elevenlabs-agents-card.component.html',
  styleUrl: './elevenlabs-agents-card.component.css'
})
export class ElevenlabsAgentsCardComponent {
  title = 'ElevenLabs Agents';
}
