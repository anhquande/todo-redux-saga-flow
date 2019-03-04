import React, { useContext, useEffect, useState } from 'react'
import { StoreContext, useDispatch } from 'redux-react-hook'
import Typography from '@material-ui/core/Typography'
import { UITodoList } from '../../components/todos/UITodoList'
import { TodoForm } from '../../components/todos/TodoForm'
import { createTodo } from '../../actions/todos'
import { doFilter } from '../../selectors'
import { useTodos, useVisibilityFilter } from '../../hooks/useReducer'
import { TodosFilter } from './TodosFilter'
import { setPageHeader } from '../../actions/page'

export function Todos() {

  const store = useContext(StoreContext)
  const todos = useTodos()
  const visibilityFilter = useVisibilityFilter()

  const dispatch = useDispatch()

  const [visibleTodos, setVisibleTodos] = useState([])

  useEffect(()=>{
    const countNewTodos = todos.filter(t => t.status === 'new').length
    const countTotal = todos.length
    dispatch(setPageHeader("Todos", `Todos (${countNewTodos}/${countTotal})`))
  })

  useEffect(()=>{
    setVisibleTodos(doFilter(todos,visibilityFilter))
  },[todos,visibilityFilter])

  function handleSubmit(title, note){
    const content = {
      title,
      note
    }

    dispatch(createTodo(content))
  }

  return (
    <>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            Todos
          </Typography>
           <TodoForm handleSubmit={handleSubmit}/>

            <UITodoList items={visibleTodos}/>
        </div>

      <div>
         <TodosFilter/>
      </div>

    </>
  )
}
