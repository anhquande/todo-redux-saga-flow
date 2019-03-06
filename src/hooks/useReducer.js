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

export function useSidebarMenuState() {
  return useMappedState(
    useCallback(state => {
      return state.sidebarMenuState
    }, []),
  )
}
export function useNotificationDrawerState() {
  return useMappedState(
    useCallback(state => {
      return state.notificationDrawerState
    }, []),
  )
}

export function useTopbarMenuState() {
  return useMappedState(
    useCallback(state => {
      return state.topbarMenuState
    }, []),
  )
}

export function useSecondTopbarState() {
  return useMappedState(
    useCallback(state => {
      return state.secondTopbarState
    }, []),
  )
}

export function useAuth() {
  return useMappedState(
    useCallback(state => {
      return state.auth
    }, []),
  )
}
