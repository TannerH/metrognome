import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {ToggleButton} from 'primeng/togglebutton';

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
  isPlaying: boolean = false;

  private readonly BASE_PATH = 'audio/metronomes/';

  constructor() {
    this.audio = new Audio(this.BASE_PATH + 'Perc_Can_hi.wav');
  }

  start(): void {
    this.isPlaying = true;
    const intervalMs = 60000 / this.bpm;

    // @ts-ignore
    this.intervalId = setInterval(() => {
      this.audio.currentTime = 0;
      this.audio.play().catch((error) => console.error("Error playing sound:", error));
    }, intervalMs);
  }

  stop(): void {
    if (this.intervalId == null) {
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

  toggle() {
    if (this.isPlaying) {
      console.log("Pausing...");
      this.stop();
    } else {
      console.log("Starting...");
      this.start();
    }
  }
}
