import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Article } from '../models/article';

@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
    public article: Article;

    constructor(public dialogRef: MdDialogRef < ArticleDetailsComponent > ) {}

    ngOnInit() {
        this.article = this.dialogRef._containerInstance.dialogConfig.data;
    }

}
