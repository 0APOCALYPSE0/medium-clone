import { addToFavoriteAction } from './../../store/actions/add-to-favorite.action';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.scss']
})
export class AddToFavoriteComponent implements OnInit {
  @Input() isFavoritedProps!:boolean;
  @Input() articleSlug!:string;
  @Input() favoritesCountProps!:number;

  constructor(private store:Store) {}

  isFavorited!:boolean;
  favoritesCount!:number;

  ngOnInit(): void{
    this.isFavorited = this.isFavoritedProps;
    this.favoritesCount = this.favoritesCountProps;
  }

  handleLike(): void{
    this.store.dispatch(addToFavoriteAction({ isFavorited: this.isFavorited, slug: this.articleSlug }));
    if(this.isFavorited){
      this.favoritesCount -= 1;
    }else{
      this.favoritesCount += 1;
    }
    this.isFavorited = !this.isFavorited;
  }

}
