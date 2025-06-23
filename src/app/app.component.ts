import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CvModule } from './components/cv/cv.module';
import { LayoutsModule } from './components/layouts/layouts.module';
import { PokemonModule } from './components/pokemon/pokemon.module';
import { AuthModule } from './components/auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HttpClientModule, 
    FormsModule, 
    CommonModule, 
    CvModule, 
    LayoutsModule, 
    PokemonModule,
    AuthModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-project';
}
