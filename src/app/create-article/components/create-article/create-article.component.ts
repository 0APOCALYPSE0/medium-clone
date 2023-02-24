import { isSubmitSelector } from './../../../auth/store/selectors';
import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { Observable } from 'rxjs';
import { createArticleAction } from './../../store/actions/create-article.action';
import { Store, select } from '@ngrx/store';
import { ArticleInput } from './../../../shared/types/article-input.interface';
import { Component, OnInit } from '@angular/core';
import { errorsSelector } from '../../store/selector';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  initialValues:ArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }
  isSubmitting$!:Observable<boolean>;
  errors$!:Observable<BackendErrors | null>;

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmitSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
  }

  onSubmit(article:ArticleInput): void{
    this.store.dispatch(createArticleAction({article}));
  }

}
