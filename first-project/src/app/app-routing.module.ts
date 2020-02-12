import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Pnf404Component } from './pnf404/pnf404.component';
import { PokedexComponent } from './pokedex/pokedex/pokedex.component';


const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "pokemon", component: PokemonComponent },
  { path: "home", component: AppComponent },
  { path: "pokedex", component: PokedexComponent },
  { path: "", redirectTo: "/app", pathMatch: "full" },
  { path: "**", component: Pnf404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
