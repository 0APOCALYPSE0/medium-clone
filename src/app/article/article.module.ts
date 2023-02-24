import { DeleteArticleEffect } from './store/effects/delete-article.effect';
import { TagListModule } from './../shared/modules/tag-list/tag-list.module';
import { ErrorModule } from './../shared/modules/error/error.module';
import { LoadingModule } from './../shared/modules/loading/loading.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleEffect } from './store/effects/article.effect';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { ArticleService as SharedArticleService } from './../shared/services/article/article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LoadingModule,
    ErrorModule,
    TagListModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([ArticleEffect, DeleteArticleEffect])
  ],
  providers: [ArticleService, SharedArticleService]
})
export class ArticleModule { }
