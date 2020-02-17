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
  showLoader: boolean;
  constructor(private router: Router, private backendService: ConnectToNodeService) { }

  ngOnInit(): void {
    this.showLoader = true;
    this.backendService.getPokedex().subscribe((data)=>{
      //just to see the spinner
      setTimeout(()=>{
        this.displayPokedex = data.slice(0,12);
        this.showLoader = false;
      },2000);
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
