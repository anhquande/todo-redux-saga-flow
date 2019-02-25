// @flow

export type ID = number

export type TodoContent = {
  +title: string,
  note: string
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
  | {type: "TODO_CREATE", +id: ID, +title: string, note?: string}
  | {type: "TODO_UPDATE_STATUS", +id: ID, +newStatus:TodoStatus}
  | {type: "TODO_DELETE", +id:ID}
  | {type: "TODO_READ_MANY"}
  | {type: "TODO_READ_ONE", +id:ID}
