import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StoreContext, useMappedState } from 'redux-react-hook'
import Card from '@material-ui/core/Card'
import { UITodoList } from '../components/UITodoList'
import { TodoForm } from '../components/TodoForm'
import { addTodo } from '../actions/todos'
import { visibleTodosSelector } from '../selectors'
import visibilityFilter from '../reducers/visibilityFilter'

function useTodosReducer() {
  return useMappedState(
    useCallback(state => {
      console.log("useMappedState: state = ",state)
      return state.todos
    }, []),
  )
}

export function AppMain(){

  const store = useContext(StoreContext)
  console.log("Store = ",store)

  const filteredTodos = visibleTodosSelector(store.getState())

  function handleSubmit(title, note){
    const content = {
      title,
      note
    }

    console.log("[handleSubmit] Content :", content)
    store.dispatch(addTodo(content))
  }

  return (
    <Card>
      <TodoForm handleSubmit={handleSubmit}/>
      <UITodoList items={filteredTodos}/>
    </Card>
  )
}
