import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InstantSpeechComponent } from './instant-speech/instant-speech.component';
import { AudiobookComponent } from './audiobook/audiobook.component';
import { ElevenlabsAgentsComponent } from './elevenlabs-agents/elevenlabs-agents.component';
import { SoundEffectComponent } from './sound-effect/sound-effect.component';
import { DubbingVideoComponent } from './dubbing-video/dubbing-video.component';
import { MusicComponent } from './music/music.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'instant-speech', component: InstantSpeechComponent },
  { path: 'audiobook', component: AudiobookComponent },
  { path: 'elevenlabs-agents', component: ElevenlabsAgentsComponent },
  { path: 'sound-effect', component: SoundEffectComponent },
  { path: 'dubbing-video', component: DubbingVideoComponent },
  { path: 'music', component: MusicComponent },
  // Note: Removed wildcard route to prevent asset redirection
  // { path: '**', redirectTo: '/home' }
];
