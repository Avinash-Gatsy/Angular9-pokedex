import { Component, OnInit } from '@angular/core';
import * as pokedex from '../../data/pokedex.json';
import { Router, NavigationExtras } from '@angular/router';
import { ConnectToNodeService } from 'src/app/services/connect-to-node.service.js';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  displayPokedex: any[];
  constructor(private router: Router, private backendService: ConnectToNodeService) { }

  ngOnInit(): void {
    this.displayPokedex = pokedex['default'].slice(0, 12);
    //console.dir(this.displayPokedex);
    this.backendService.getPokedex().subscribe((data)=>{
      console.dir(data);
    }, (err) => {
      console.dir(err);
    });
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
