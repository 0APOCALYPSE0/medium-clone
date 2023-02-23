import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'feed', component: YourFeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YourFeedRoutingModule { }