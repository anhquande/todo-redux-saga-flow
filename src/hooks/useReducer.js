import { useMappedState } from 'redux-react-hook'
import { useCallback } from 'react'

export function useVisibilityFilter() {
  return useMappedState(
    useCallback(state => {
      return state.visibilitiyFilter
    }, []),
  )
}

export function useTodos() {
  return useMappedState(
    useCallback(state => {
      return state.todos
    }, []),
  )
}

export function useTags() {
  return useMappedState(
    useCallback(state => {
      return state.tagsState
    }, []),
  )
}

export function useLayout() {
  return useMappedState(
    useCallback(state => {
      return state.layout
    }, []),
  )
}

export function useLocaleState() {
  return useMappedState(
    useCallback(state => {
      return state.localeState
    }, []),
  )
}

export function usePageState() {
  return useMappedState(
    useCallback(state => {
      return state.pageState
    }, []),
  )
}
