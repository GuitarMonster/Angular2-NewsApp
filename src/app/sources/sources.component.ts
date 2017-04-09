import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Source } from '../models/source';
import { Article } from '../models/article';

@Component({
    selector: 'app-sources',
    templateUrl: './sources.component.html',
    styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
    private sources: Source[];

    constructor(
        private newsService: NewsService
    ) {}

    ngOnInit() {
        this.newsService.getSources()
        .subscribe(data => {
            this.sources = data.json().sources;
        });
    }
}
