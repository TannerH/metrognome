import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import {MetronomeComponent} from './metronome/metronome.component';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    SliderModule,
    MetronomeComponent,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

}
