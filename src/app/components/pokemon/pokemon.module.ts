import { NgModule } from "@angular/core";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { PokemonCounterComponent } from "./pokemon-counter/pokemon-counter.component";
import { PokemonFavoritesComponent } from "./pokemon-favorites/pokemon-favorites.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PokemonService } from "../../services/pokemon.service";

@NgModule({
    declarations: [PokemonCardComponent, 
        PokemonCounterComponent, 
        PokemonFavoritesComponent, 
        PokemonListComponent],
    imports: [CommonModule, 
        FormsModule, 
        HttpClientModule],
    providers: [PokemonService],
    exports: [PokemonCardComponent, 
            PokemonCounterComponent, 
            PokemonFavoritesComponent, 
            PokemonListComponent]
})

export class PokemonModule { }