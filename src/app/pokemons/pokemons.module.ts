import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { UIRouterModule }         from 'ui-router-ng2';
import { PokemonsComponent }      from "./pokemons.component";

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forChild({
      states: [
        {
          name: 'app.pokemons',
          component: PokemonsComponent,
          url: 'pokemons'
        }
      ]
    })
  ],
  declarations: [
    PokemonsComponent
  ],
  bootstrap: [PokemonsComponent]
})
export class PokemonsModule {}
