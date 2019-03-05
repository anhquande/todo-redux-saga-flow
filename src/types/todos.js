// @flow

export type ID = number

export type TodoContent = {
  +title: string,
  note?: string
}

export type TodoStatus = "new" | "todo" | "in progress" | "done" | "approved"

export type TodoItem = {
  +id: ID,
  +content: TodoContent,
  +status: TodoStatus,
  +updatedOn: Date,
  +createdOn: Date,
}

export type TodoList = Array<TodoItem>

export type TodosState = {
  +todos: TodoList
}

export type TodosAction =
  | {type: "TODO_CREATE", payload:{+id: ID, +title: string, note?: string}}
  | {type: "TODO_UPDATE_STATUS", payload:{+id: ID, +status:TodoStatus}}
  | {type: "TODO_DELETE", payload:{+id:ID}}
  | {type: "TODO_READ_MANY"}
  | {type: "TODO_READ_ONE", payload:{+id:ID}}
