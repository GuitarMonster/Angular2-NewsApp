import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {
    private apiKey = '1983aadc64c541f3b442dc880a8bed24';
    private sourcesUrl = 'https://newsapi.org/v1/sources';
    private articlesUrl = 'https://newsapi.org/v1/articles';

    constructor(private http: Http) {}

    getSources() {
        return this.http.get(this.sourcesUrl);
    }

    getArticles(sourceId: string) {
        return this.http.get(`${this.articlesUrl}?source=${sourceId}&apiKey=${this.apiKey}`);
    }

}
