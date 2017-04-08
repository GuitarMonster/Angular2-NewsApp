import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { SourcesComponent } from './sources/sources.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'sources', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'sources', component: SourcesComponent, children: [
        { path: ':id', component: ArticlesComponent }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {}
