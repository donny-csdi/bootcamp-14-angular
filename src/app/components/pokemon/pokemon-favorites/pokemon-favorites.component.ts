import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../../utils/interface';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-favorites',
  standalone: false,
  templateUrl: './pokemon-favorites.component.html',
  styleUrl: './pokemon-favorites.component.scss'
})
export class PokemonFavoritesComponent implements OnInit {

  availablePokemons: IPokemon[] = [];
  favoritePokemons: IPokemon[] = [];
  loading: boolean= false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  async loadPokemon () {
    try {
      this.loading = true;
      
      const response = await this.pokemonService.getPokemonList(10);

      this.availablePokemons = await Promise.all(
        response.map(async (pokemon) => {
          const details = await this.pokemonService.getPokemonDetail(pokemon.url);
          return {
            name: pokemon.name,
            id: this.extractPokemonId(pokemon.url),
            spirits: details.sprites.front_default
          }
        })
      )
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false;
    }
  }

  private extractPokemonId(url: string): number {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? parseInt(matches[1]) : 0;
  }

  addToFavorite(pokemon: IPokemon): void {
    if (!this.favoritePokemons.some(p => p.id === pokemon.id) ) {
      this.favoritePokemons.push(pokemon);
    }
  }

  removeFromFavorite(pokemon: IPokemon): void {
    this.favoritePokemons = this.favoritePokemons.filter(p => p.id !== pokemon.id);
  }

}
