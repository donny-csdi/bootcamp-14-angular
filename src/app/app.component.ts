import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvModule } from './components/cv/cv.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CvModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training-project';
}
