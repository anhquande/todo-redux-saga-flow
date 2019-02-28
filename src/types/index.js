// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { TodosState, TodosAction } from './todos'
import type { VisibilityFilterState, VisibilityFilterAction } from './visibilityFilter'
import type { LayoutState, LayoutAction } from './layout'
import type { LocaleAction, LocaleState } from './locale'
import type { PageAction, PageState } from './page'
import type { TagsAction, TagsState } from './tags'

export type ReduxInitAction = { type: '@@INIT' };

export type State =
  TodosState &
  VisibilityFilterState &
  LayoutState &
  LocaleState &
  TagsState &
  PageState;

export type Action =
  ReduxInitAction |
  TodosAction |
  VisibilityFilterAction |
  LayoutAction |
  LocaleAction |
  TagsAction |
  PageAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
