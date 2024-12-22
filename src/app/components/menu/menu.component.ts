import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';
import {Image} from 'primeng/image';

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
  menuItems: MenuItem[] = [
    {
      label: 'Saved Tempos',
      items: [
        {label: 'Add new', icon: 'pi pi-plus'},
        {label: '90 BPM Item', icon: 'pi pi-chevron-right'}
      ]
    },
    {
      label: 'Saved Timers',
      items: [
        {label: 'Add new', icon: 'pi pi-plus'},
        {label: '10 min', icon: 'pi pi-clock'}
      ]
    }
  ]

}
