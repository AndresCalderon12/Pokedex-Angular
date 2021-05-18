import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonList } from '../model/PokemonList';
import { HttpClientService } from '../service/http-client.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../model/Pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  initial:number=10;
  last:number=10;
  pokemonList: Array<PokemonList> = [];
  pokemonTypes:Array<String>=[];
  pokemon: Pokemon = new Pokemon();
  pokemonAbilities:Array<String>=[];
  pokemonListReceived: Array<PokemonList> = [];
  constructor(private router: Router, private httpClientService: HttpClientService,public modal:NgbModal) { }

  ngOnInit() {
    this.httpClientService.getPokemonList(this.initial,this.last).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: PokemonList[]) {
    this.pokemonList = new Array<PokemonList>();

    this.pokemonListReceived = response;

    for (let index = 0; index < this.pokemonListReceived.length; index++) {
      const pokemonListRetrieved = new PokemonList();
      pokemonListRetrieved.photo = this.pokemonListReceived[index].photo;
      pokemonListRetrieved.weight =this.pokemonListReceived[index].weight;
      pokemonListRetrieved.types= this.pokemonListReceived[index].types;
      pokemonListRetrieved.abilities= this.pokemonListReceived[index].abilities;
      pokemonListRetrieved.name= this.pokemonListReceived[index].name;
      this.pokemonList.push(pokemonListRetrieved);
  
    }
     
  }

  moreInformation(pokemonName:String,template: any){
    this.httpClientService.getPokemonByName(pokemonName).subscribe(
      response => this.handleSuccessfulResponseByName(response),
    );
    this.modal.open(template);
  }
  handleSuccessfulResponseByName(response: Pokemon) {
   
    this.pokemon = response;
    }

    changeList(operation:number){
      console.log("Prueba"+this.initial);
      if (operation===1 && this.initial>10){
        this.initial-10;
        this.ngOnInit();
    }else if (operation===2) {
        this.initial=this.initial+10;
        this.ngOnInit();
    }
  

  }
     
}
