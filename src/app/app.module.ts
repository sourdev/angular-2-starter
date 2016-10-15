import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { UIRouterModule, UIView } from 'ui-router-ng2';
import { AppComponent }           from './app.component';
import { PokemonsModule }         from './pokemons/pokemons.module';

@NgModule({
  imports: [
    BrowserModule,
    PokemonsModule,
    UIRouterModule.forRoot({
      states: [
        {
          name: 'app',
          component: AppComponent,
          url: '/'
        }
      ]
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
