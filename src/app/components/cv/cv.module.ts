import { NgModule } from "@angular/core";
import { CvComponent } from "./cv-page/cv.component";
import { CommonModule } from "@angular/common";
import { CvService } from "./cv.service";
import { PokemonCounterComponent } from "../pokemon-counter/pokemon-counter.component";
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { PokemonFavoritesComponent } from "../pokemon-favorites/pokemon-favorites.component";
import { PokemonService } from "../../services/pokemon.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[CvComponent, PokemonCounterComponent, PokemonCardComponent, PokemonFavoritesComponent],
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    providers:[CvService, PokemonService],
    exports:[CvComponent]
})

export class CvModule { }
