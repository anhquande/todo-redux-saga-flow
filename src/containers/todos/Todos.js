import React, { useContext, useEffect, useState } from 'react'
import { StoreContext, useDispatch } from 'redux-react-hook'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { UITodoList } from '../../components/todos/UITodoList'
import { TodoForm } from '../../components/todos/TodoForm'
import { createTodo } from '../../actions/todos'
import { doFilter } from '../../selectors'
import { useTodos, useVisibilityFilter } from '../../hooks/useReducer'
import { TodosFilter } from './TodosFilter'

export function Todos() {
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
