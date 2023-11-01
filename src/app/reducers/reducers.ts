import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { articleReducer } from './article-reducers';

export const reducers: ActionReducerMap<AppState> = {
  articleState: articleReducer
}; 