import { react, useContext } from "react"

export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            todoTite: 'Learn React',
            completed: false
        }
    ],
    addTodo: (todo) => {},
})


export const useTodo = ( ) => {
    return useContext(TodoContext)
}

