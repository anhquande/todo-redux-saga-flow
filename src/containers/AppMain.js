import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StoreContext, useDispatch, useMappedState } from 'redux-react-hook'
import Card from '@material-ui/core/Card'
import { UITodoList } from '../components/UITodoList'
import { TodoForm } from '../components/TodoForm'
import { createTodo } from '../actions/todos'
import { doFilter, visibleTodosSelector } from '../selectors'
import { useTodos, useVisibilityFilter } from '../hooks/useReducer'

export function AppMain(){
  console.log("[AppMain].render()")

  const store = useContext(StoreContext)
  const todos = useTodos()
  const visibilityFilter = useVisibilityFilter()

  const dispatch = useDispatch()

  console.log("AppMain.store= ",store)
  console.log("AppMain.store.state= ",store.getState())
  const [visibleTodos, setVisibleTodos] = useState([])

  useEffect(()=>{
    console.log("useEffect")
     setVisibleTodos(doFilter(todos,visibilityFilter))
  },[todos,visibilityFilter])

  function handleSubmit(title, note){
    const content = {
      title,
      note
    }

    console.log("[handleSubmit] Content :", content)
    dispatch(createTodo(content))
  }

  return (
    <Card>
      <TodoForm handleSubmit={handleSubmit}/>
      <UITodoList items={visibleTodos}/>
    </Card>
  )
}
