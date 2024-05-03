import { Component } from '@angular/core';
import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})  
export class HomePage {
  results: any[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      this.results = data.results;
    });
  }

  handleInput(event) {
    // Manejar la búsqueda si es necesario
    // property 'results' has no initializer and is not definitely assigned in the constructor.
    // Parameter 'event' implicitly has an 'any' type.
  }

}
