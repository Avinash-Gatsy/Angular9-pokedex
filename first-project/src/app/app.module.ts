import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmountPipe } from './amount.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Pnf404Component } from './pnf404/pnf404.component';
import { EditEmployeeComponent } from './pokemon/edit-employee/edit-employee.component';
import { SafePipe } from './pipes/safe.pipe';
import { PokedexComponent } from './pokedex/pokedex/pokedex.component';
import { LoaderDirective } from './directives/loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    AmountPipe,
    HomeComponent,
    PokemonComponent,
    Pnf404Component,
    EditEmployeeComponent,
    SafePipe,
    PokedexComponent,
    LoaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
