import { UserProfileModule } from './user-profile/user-profile.module';
import { SettingsModule } from './settings/settings.module';
import { EditArticleModule } from './edit-article/edit-article.module';
import { CreateArticleModule } from './create-article/create-article.module';
import { ArticleModule } from './article/article.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { AuthInterceptorService } from './shared/services/interceptor/auth-interceptor.service';
import { PersistanceService } from './shared/services/persistance/persistance.service';
import { TopbarModule } from './shared/modules/topbar/topbar.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routerReducer } from '@ngrx/router-store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    TopbarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    UserProfileModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
