// @flow
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux'

import type { TodosAction, TodosState } from './todos'
import type { VisibilityFilterAction, VisibilityFilterState } from './visibilityFilter'
import type { LayoutAction, LayoutState } from './layout'
import type { LocaleState } from './locale'
import type { PageAction, PageState } from './page'
import type { TagsAction, TagsState } from '../repository/tag/types'

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
  TagsAction |
  PageAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
