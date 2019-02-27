// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { TodosState, TodosAction } from './todos'
import type { VisibilityFilterState, VisibilityFilterAction } from './visibilityFilter'
import type { LayoutState, LayoutAction } from './layout'
import type { LocaleAction, LocaleState } from './locale'
import type { PageAction, PageState } from './page'

export type ReduxInitAction = { type: '@@INIT' };

export type State =
  TodosState &
  VisibilityFilterState &
  LayoutState &
  LocaleState &
  PageState;

export type Action =
  ReduxInitAction |
  TodosAction |
  VisibilityFilterAction |
  LayoutAction |
  LocaleAction |
  PageAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
