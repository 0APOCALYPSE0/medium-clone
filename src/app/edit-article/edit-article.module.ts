import { ArticleService } from './../shared/services/article/article.service';
import { EditArticleService } from './services/edit-article.service';
import { ArticleEffect } from './store/effects/article.effect';
import { LoadingModule } from './../shared/modules/loading/loading.module';
import { ArticleFormModule } from './../shared/modules/article-form/article-form.module';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EditArticleRoutingModule } from './edit-article-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { reducers } from './store/reducer';



@NgModule({
  declarations: [
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    EditArticleRoutingModule,
    ArticleFormModule,
    LoadingModule,
    StoreModule.forFeature('edit-article', reducers),
    EffectsModule.forFeature([UpdateArticleEffect, ArticleEffect])
  ],
  providers: [EditArticleService, ArticleService]
})
export class EditArticleModule { }
