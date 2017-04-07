import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NewsService } from './services/news.service';
import { ArticlesComponent } from './articles/articles.component';
import { SourcesComponent } from './sources/sources.component';
import { FilterBy } from './pipes/filterBy.pipe';
import { ArticleDetailsComponent } from './article-details/article-details.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        ArticlesComponent,
        SourcesComponent,
        FilterBy,
        ArticleDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        RoutingModule
    ],
    entryComponents: [
        ArticleDetailsComponent
    ],
    providers: [NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
