import { PopularTagsService } from './services/popular-tags.service';
import { RouterModule } from '@angular/router';
import { ErrorModule } from './../error/error.module';
import { LoadingModule } from './../loading/loading.module';
import { PopularTagsEffect } from './store/effects/popular-tags.effect';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';



@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    ErrorModule,
    RouterModule,
    StoreModule.forFeature('tags',reducers),
    EffectsModule.forFeature([PopularTagsEffect])
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule { }
