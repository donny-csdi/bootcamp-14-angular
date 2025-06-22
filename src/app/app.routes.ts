import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv-page/cv.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { PokemonCounterComponent } from './components/pokemon/pokemon-counter/pokemon-counter.component';
import { PokemonFavoritesComponent } from './components/pokemon/pokemon-favorites/pokemon-favorites.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: LayoutsComponent,
        children: [
            {
                path: '',
                component: CvComponent
            },
            {
                path: 'pokemon-counter',
                component: PokemonCounterComponent
            },
            {
                path: 'pokemon-favorites',
                component: PokemonFavoritesComponent
            },
            {
                path: 'pokemon-list',
                component: PokemonListComponent
            }
        ]
    },
];
