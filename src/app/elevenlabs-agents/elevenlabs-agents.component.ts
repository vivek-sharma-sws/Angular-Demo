import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elevenlabs-agents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elevenlabs-agents.component.html',
  styleUrl: './elevenlabs-agents.component.css'
})
export class ElevenlabsAgentsComponent {
  title = 'ElevenLabs Agents';
}
