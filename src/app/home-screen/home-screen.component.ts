import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstantSpeechCardComponent } from '../instant-speech/instant-speech-card.component';
import { AudiobookCardComponent } from '../audiobook/audiobook-card.component';
import { ElevenlabsAgentsCardComponent } from '../elevenlabs-agents/elevenlabs-agents-card.component';
import { SoundEffectCardComponent } from '../sound-effect/sound-effect-card.component';
import { DubbingVideoCardComponent } from '../dubbing-video/dubbing-video-card.component';
import { MusicCardComponent } from '../music/music-card.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, InstantSpeechCardComponent, AudiobookCardComponent, ElevenlabsAgentsCardComponent, SoundEffectCardComponent, DubbingVideoCardComponent, MusicCardComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  title = 'Welcome to Home Screen';
  description = 'This is your Angular home screen component.';
  
  features = [
    'Modern Angular 20 setup',
    'Standalone components',
    'Server-side rendering ready',
    'TypeScript support'
  ];
}
