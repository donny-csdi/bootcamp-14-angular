import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() pokemon!: any;
  @Input() isFavorite: boolean = false
  
  @Output() addToFavorite = new EventEmitter<any>();
  @Output() removeFromFavorite = new EventEmitter<any>();

  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFromFavorite.emit(this.pokemon)
    } else {
      this.addToFavorite.emit(this.pokemon)
    }
  }
  
}
