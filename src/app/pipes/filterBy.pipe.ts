import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';

@Pipe({
    name: 'filterBy'
})
export class FilterBy implements PipeTransform {
    transform(articles: Article[], field: string, value: string): any {
        if (value) {
            value = value.toLowerCase();
            return articles.filter(article => {
                return article[field].toLowerCase().indexOf(value) > -1;
            })
        }
        return articles;
    }
}
