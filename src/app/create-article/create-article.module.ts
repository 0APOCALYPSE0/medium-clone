import { reducers } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { CreateArticleService } from './services/create-article.service';
import { ArticleFormModule } from './../shared/modules/article-form/article-form.module';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    ArticleFormModule,
    StoreModule.forFeature('create-article', reducers),
    EffectsModule.forFeature([CreateArticleEffect])
  ],
  providers: [CreateArticleService]
})
export class CreateArticleModule { }
