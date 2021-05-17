import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../model/PokemonList';
import { Pokemon } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getPokemonList(){
    return this.httpClient.get<PokemonList[]>('https://stark-hamlet-96865.herokuapp.com/pokemon/list?initial='+20+'&'+'last='+20);
  }
  getPokemonByName(name:String){
    return this.httpClient.get<Pokemon>('https://stark-hamlet-96865.herokuapp.com/pokemon/pokemonbyname?name='+name);

  }
}