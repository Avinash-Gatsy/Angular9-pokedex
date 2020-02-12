import { Component, OnInit } from '@angular/core';
import * as pokedex from '../../data/pokedex.json';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  displayPokedex: any[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.displayPokedex = pokedex['default'].slice(0, 12);
    console.dir(this.displayPokedex);
  }
  onClick(e, i){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pokemonId: i+1,
        pokemonName: this.displayPokedex[i].name.english
      }
    }
    this.router.navigate(['pokemon'], navigationExtras);
  }

}
