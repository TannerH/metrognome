import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    SliderModule
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {

  private audio: HTMLAudioElement;
  protected bpm = 90;
  private intervalId: number | null = null;

  ngOnInit(): void {
    this.audio = new Audio('Perc_Can_hi.wav');
    if (this.audio.error) {
      console.error("Error loading audio file.");
    }
    // this.start();
  }


  start(): void {
    if (this.intervalId !== null) {
      console.warn("Metronome is already running.");
      return;
    }

    const intervalMs = 60000 / this.bpm; // Calculate interval in milliseconds
    setInterval(() => {
    })
    // @ts-ignore
    this.intervalId = setInterval(() => {
      this.audio.currentTime = 0; // Reset the audio to the beginning
      console.log("BEEP");
      this.audio.play().catch((error) => console.error("Error playing sound:", error));
    }, intervalMs);

    console.log(`Metronome started at ${this.bpm} BPM.`);
  }

  stop(): void {
    if (this.intervalId === null) {
      console.warn("Metronome is not running.");
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = null;
    console.log("Metronome stopped.");
  }

  setBPM(newBPM: number): void {
    if (newBPM <= 0) {
      console.error("BPM must be greater than 0.");
      return;
    }

    this.bpm = newBPM;
    if (this.intervalId !== null) {
      this.stop();
      this.start();
    }

    console.log(`BPM set to ${this.bpm}.`);
  }
}
