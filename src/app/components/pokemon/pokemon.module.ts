import { NgModule } from "@angular/core";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { PokemonCounterComponent } from "./pokemon-counter/pokemon-counter.component";
import { PokemonFavoritesComponent } from "./pokemon-favorites/pokemon-favorites.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PokemonService } from "../../services/pokemon.service";
import { RouterModule, Routes } from "@angular/router";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

const routes: Routes = [
    {
        path: '',
        component: PokemonListComponent
    },
    {
        path: ':id',
        component: PokemonDetailComponent
    },
    {
        path: 'pokemon-counter',
        component: PokemonCounterComponent
    },
    {
        path: 'pokemon-favorites',
        component: PokemonFavoritesComponent
    }
]

@NgModule({
    declarations: [PokemonCardComponent, 
        PokemonCounterComponent, 
        PokemonFavoritesComponent, 
        PokemonListComponent,
        PokemonDetailComponent],
    imports: [CommonModule, 
        FormsModule, 
        HttpClientModule,
        RouterModule.forChild(routes)],
    providers: [PokemonService],
    exports: [RouterModule]
})

export class PokemonModule { }