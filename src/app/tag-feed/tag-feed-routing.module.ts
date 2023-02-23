import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'tags/:slug', component: TagFeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TagFeedRoutingModule { }