import {Component, inject} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';
import {Image} from 'primeng/image';
import {AudioService} from '../../services/audio.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuModule,
    AvatarModule,
    Image
  ],
  templateUrl: './menu.component.html',
  styleUrls: [],
})
export class MenuComponent {
  private audioService: AudioService = inject(AudioService);

  private changeSound(sound: string) {
    if (sound === 'clap') {
      this.audioService.setClap()
    } else if (sound === 'percussion') {
      this.audioService.setPercussion()
    }
  }


  menuItems: MenuItem[] = [
    // {
    //   label: 'Saved Tempos',
    //   items: [
    //     {label: 'Add new', icon: 'pi pi-plus'},
    //     {label: '90 BPM Item', icon: 'pi pi-chevron-right'}
    //   ]
    // },
    // {
    //   label: 'Saved Timers',
    //   items: [
    //     {label: 'Add new', icon: 'pi pi-plus'},
    //     {label: '10 min', icon: 'pi pi-clock'}
    //   ]
    // },
    {
      label: 'Metronome Sounds',
      items: [
        {
          label: 'Percussion',
          command: () => {
            this.changeSound('percussion');

          }
        },
        {
          label: 'Clap', command: () => {
            this.changeSound('clap');
          }
        }
      ]
    }
  ]

}
