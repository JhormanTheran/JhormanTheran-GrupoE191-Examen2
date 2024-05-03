import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(`${this.apiUrl}/pokemon`);
  }

  // Puedes agregar más métodos según tus necesidades, por ejemplo, para obtener detalles de un Pokémon específico.
}