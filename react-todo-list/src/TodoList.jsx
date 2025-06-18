import { TodoTasks } from "./TodoTasks"

export function TodoList({todos, toggleTodo, deleteTodo}) {
   return  (<ul className="list">
        {todos.length === 0 && "No Todo Tasks"}
        {todos.map(todo => {
        return (<TodoTasks {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)
        })}
    </ul>)
}