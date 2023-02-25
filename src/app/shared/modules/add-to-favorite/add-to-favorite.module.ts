import { AddToFavoriteEffect } from './store/effects/add-to-favorite.effect';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoriteService } from './services/add-to-favorite.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoriteComponent } from './components/add-to-favorite/add-to-favorite.component';

@NgModule({
  declarations: [
    AddToFavoriteComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoriteEffect])
  ],
  exports: [AddToFavoriteComponent],
  providers: [AddToFavoriteService]
})
export class AddToFavoriteModule { }
