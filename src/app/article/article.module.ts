import { ArticleEffect } from './store/effects/article.effect';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { ArticleService } from './../shared/services/article/article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([ArticleEffect])
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
