import {Component, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {ToggleButton} from 'primeng/togglebutton';
import {AudioService} from '../../services/audio.service';

@Component({
  selector: 'app-metronome',
  standalone: true,
  imports: [
    ButtonModule,
    SliderModule,
    FormsModule,
    ToggleButton,
  ],
  templateUrl: './metronome.component.html',
  styleUrls: [],
})
export class MetronomeComponent {
  private intervalId: number | null = null;

  bpm: number = 90;
  isPlaying = false;
  audioService: AudioService = inject(AudioService);

  start(): void {
    if (this.intervalId !== null) {
      console.log("Trying to start when already playing.");
      return;
    }
    this.isPlaying = true;
    const intervalMs = 60000 / this.bpm;

    // @ts-ignore
    this.intervalId = setInterval(() => {
      this.audioService.reset();
      this.audioService.play();
    }, intervalMs);
  }

  stop(): void {
    if (this.intervalId == null) {
      console.log("Trying to stop when not playing.");
      return;
    }
    this.isPlaying = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  setBPM(newBPM: number): void {
    if (this.bpm === newBPM) {
      return;
    }
    this.bpm = newBPM;
    if (this.intervalId !== null) {
      this.stop();
      this.start();
    }
  }

  onToggle() {
    // isPlaying is already updated by the UI element so checking the post updated state
    // could probably change to reactive forms to make this cleaner
    if (this.isPlaying) {
      this.start();
    } else {
      this.stop();
    }
  }
}
