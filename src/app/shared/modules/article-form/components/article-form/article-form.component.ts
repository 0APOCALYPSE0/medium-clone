import { FormGroup, FormBuilder } from '@angular/forms';
import { BackendErrors } from './../../../../types/backendErrors.interface';
import { ArticleInput } from './../../../../types/article-input.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues!:ArticleInput | null;
  @Input() isSubmitting!:boolean | null;
  @Input() errors!:BackendErrors | null;
  @Output() articleSubmitEvent = new EventEmitter<ArticleInput>();
  articleForm!:FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void{
    this.createForm();
  }

  createForm(): void{
    this.articleForm = this.fb.group({
      title: [this.initialValues!.title],
      description: [this.initialValues!.description],
      body: [this.initialValues!.body],
      tagList: [this.initialValues!.tagList.join(' ')]
    });
  }

  onSubmit(): void{
    if(this.articleForm.valid){
      this.articleSubmitEvent.emit(this.articleForm.value);
    }
  }

}
