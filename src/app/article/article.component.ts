import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as articleReducer from '../reducers/article-reducers';
import * as fromActions from '../actions/article-actions';
import { ArticleState } from '../reducers/app.state';
import { Article, FAVORITE_ARTICLES } from '../model/article';

@Component({
	selector: 'app-article',
	templateUrl: 'article.component.html'
})
export class ArticleComponent {
	articles$: Observable<Article[]>;

	constructor(private store: Store<ArticleState>) {
		this.articles$ = store.select(articleReducer.getArticles);
	}
	showJavaArticles() {
		this.store.dispatch(fromActions.JavaArticlesAction());
	}
	showAngularArticles() {
		this.store.dispatch(fromActions.AngularArticlesAction());
	}
	showFavoriteArticles() {
		this.store.dispatch(fromActions.FavoriteArticlesAction({ payload: FAVORITE_ARTICLES }));
	}
} 