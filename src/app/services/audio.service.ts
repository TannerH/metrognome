import {Injectable} from '@angular/core';

type Sound = {
  name: string;
  hiPath: string;
  lowPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private readonly BASE_PATH = 'audio/metronomes/';
  private readonly SOUND1: Sound = {
    name: 'Percussion',
    hiPath: 'Perc_Can_hi.wav',
    lowPath: 'Perc_Can_lo.wav'
  };

  private readonly SOUND2: Sound = {
    name: 'Clap',
    hiPath: 'Perc_Clap_hi.wav',
    lowPath: 'Perc_Clap_lo.wav'
  };

  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.setClap()
  }

  changeSound(sound: Sound) {
    this.audio.src = this.BASE_PATH + sound.hiPath;
  }

  reset() {
    this.audio.currentTime = 0;
  }

  setClap() {
    this.changeSound(this.SOUND2);
  }

  setPercussion() {
    this.changeSound(this.SOUND1);
  }

  play() {
    this.audio.play();
  }

  stop() {
    this.audio.pause();
  }
}
