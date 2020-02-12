import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  empObj: Employee;
  editEmoji: string;
  editMode: boolean;
  showPokemon:boolean;
  pokemonId: number;
  pokemonName: string;
  constructor(private route: ActivatedRoute) {
    this.empObj = new Employee(1234, "AB Arjun", 1600345, "C11");
  }

  ngOnInit(): void {
    this.editMode = false;
    this.showPokemon = false;
    this.editEmoji = "<span style='font-size:25px; cursor: pointer;'>&#9997;&#127997;</span>";
    this.route.queryParams.subscribe(params=>{
      this.pokemonId = params.pokemonId;
      this.pokemonName = params.pokemonName;
      (this.pokemonId && this.pokemonName) ? this.showPokemon = true : this.showPokemon = false;
    });
  }

}
