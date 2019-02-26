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

export function useLayout() {
  return useMappedState(
    useCallback(state => {
      return state.layout
    }, []),
  )
}
