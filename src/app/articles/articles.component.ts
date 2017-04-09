import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { NewsService } from '../services/news.service';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { Article } from '../models/article';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    public articles: Article[];
    public author: string;
    public title: string;

    constructor(private route: ActivatedRoute, private newsService: NewsService, public dialog: MdDialog) {}

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .subscribe((id) => {
                this.newsService.getArticles(id)
                    .subscribe(data => {
                        this.articles = data.json().articles;
                        this.articles.forEach(article => {
                            if (article.publishedAt) {
                                article.publishedDate = new Date(article.publishedAt);
                            }
                            if (!article.author) {
                                article.author = 'Unknown author';
                            }
                        });
                    });
            });
    }

    openDetails(article) {
        const dialogRef = this.dialog.open(ArticleDetailsComponent, {
            width: '50%',
            data: article
        });
    }


    sortByNewest() {
        this.articles.sort((a, b) => {
            if (!a.publishedDate) {
                return 1;
            }
            if (!b.publishedDate) {
                return -1;
            }
            return (a.publishedDate > b.publishedDate) ? -1 : (a.publishedDate < b.publishedDate) ? 1 : 0;
        });
    }

    sortByLatest() {
        this.articles.sort((a, b) => {
            if (!a.publishedDate) {
                return -1;
            }
            if (!b.publishedDate) {
                return 1;
            }
            return (a.publishedDate > b.publishedDate) ? 1 : (a.publishedDate < b.publishedDate) ? -1 : 0;
        });
    }
}
