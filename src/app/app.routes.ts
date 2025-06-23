import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv-page/cv.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { PokemonCounterComponent } from './components/pokemon/pokemon-counter/pokemon-counter.component';
import { PokemonFavoritesComponent } from './components/pokemon/pokemon-favorites/pokemon-favorites.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        canActivate: [authGuard],
        component: LayoutsComponent,
        children: [
            {
                path: '',
                component: CvComponent
            },
            {
                path: 'pokemon',
                loadChildren: () => import('./components/pokemon/pokemon.module').then(m => m.PokemonModule)
            }
        ]
    },
];
