import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemonDetail } from '../../../utils/interface';

@Component({
  selector: 'app-pokemon-detail',
  standalone: false,
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: IPokemonDetail | null = null
  evolutionChain: any
  currentEvolutionIndex: number = 0
  evolutionList: string[] = []
  listOfEvolvedPokemon: Array<any> = []
  loading: boolean = false
  error: string | null = null
  isDevolveDisabled: boolean = false
  isEvolveDisabled: boolean = false
  evolutions: any[] = []  

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadPokemonDetails(params['id'])
      }
    })
  }

  async loadPokemonDetails(name:string) {
    try {
      this.loading = true
      const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + name
      const pokemon = await this.pokemonService.getPokemonDetail(pokemonUrl)
      this.pokemon = pokemon
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }

  hearCry() {
    if (this.pokemon?.cries.latest) {
      const audio = new Audio(this.pokemon?.cries.latest)
      audio.play()
    } else {
      const audio = new Audio(this.pokemon?.cries.legacy)
      audio.play()
    }
  }
}
