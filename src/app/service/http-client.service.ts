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

     getPokemonList(initial:number,last:number){
    return this.httpClient.get<PokemonList[]>('https://pokemon-api-back-spring-boot.herokuapp.com/pokemon/list?initial='+initial+'&'+'last='+last);
  }
  getPokemonByName(name:String){
    return this.httpClient.get<Pokemon>('https://pokemon-api-back-spring-boot.herokuapp.com/pokemon/pokemonbyname?name='+name);

  }
}