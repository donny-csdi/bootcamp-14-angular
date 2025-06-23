import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../../services/pokemon.service';
import { IPokemon } from '../../../utils/interface';
import { CommonModule } from '@angular/common';
import { start } from 'repl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{
    public searchPokemon: string = '';
    elements: string[] = [
      'normal', 'fire', 'water', 'electric', 'grass', 'ice',
      'fighting', 'poison', 'ground', 'flying', 'psychic',
      'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
    ];
    pokemons:IPokemon[] =[]
    filteredPokemonList:IPokemon[]=[]
    paginatedPokemon:IPokemon[]=[]
    loading:boolean=false
    selectedElement:string=''
    selectedPokemon:IPokemon | null = null
    totalPages: number = 0
    currentPage: number = 1
    color='blue'
    color2='red'

    constructor(private pokemonService:PokemonService, private router: Router){}

    ngOnInit(): void {
      this.loadPokemon()
    }

    async loadPokemon () {
      try {
        this.loading = true;
        
        const response = await this.pokemonService.getPokemonList();
  
        this.pokemons = await Promise.all(
          response.map(async (pokemon) => {
            const details = await this.pokemonService.getPokemonDetail(pokemon.url);
            return {
              name: pokemon.name,
              url: pokemon.url,
              element: details.types[0].type?.name,
              id: this.extractPokemonId(pokemon.url),
              spirits: details.sprites.front_default
            }
          })
        )

        this.filteredPokemonList = this.pokemons;
        this.updatePagination()
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

    filterPokemon() {
      this.filteredPokemonList = this.pokemons.filter(pokemon => {
        const matchesSearch = pokemon.name.toLowerCase().includes(this.searchPokemon.toLowerCase());
        const matchesElement = !this.selectedElement || pokemon.element === this.selectedElement;
        return matchesSearch && matchesElement;
      })
      this.currentPage = 1;
      this.updatePagination()
    }

    filterByElement(element:string): void {
      this.selectedElement = this.selectedElement === element ? '' : element;
      this.filterPokemon();
    }

    selectPokemon(pokemon:IPokemon) {
      this.selectedPokemon = this.selectedPokemon?.name === pokemon.name ? null : pokemon;
    }

    viewDetails(pokemon: IPokemon, event: any) {
      event.stopPropagation();
      this.router.navigate([`/pokemon/${pokemon.name}`])
    }

    updatePagination() {
      this.totalPages = Math.ceil(this.filteredPokemonList.length / 18)
      this.paginate()
    }

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.paginate()
      }
    }

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.paginate()
      }
    }

    paginate() {
      const startIndex = (this.currentPage - 1) * 18;
      const endIndex = startIndex + 18
      this.paginatedPokemon = this.filteredPokemonList.slice(startIndex, endIndex)
    }

}
