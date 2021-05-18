import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
  { path: 'modal', component: ModalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
