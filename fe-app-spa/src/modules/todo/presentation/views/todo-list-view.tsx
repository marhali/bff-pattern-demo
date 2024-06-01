import {Todo} from "@/modules/todo/domain/todo.ts";
import {Link} from "react-router-dom";

type TodoListViewProps = {
  todos: Array<Todo>
}

function TodoListView(props: TodoListViewProps) {
  const { todos } = props

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Completed
          </th>
        </tr>
        </thead>
        <tbody>
        {todos.map((todo) => (
          <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <Link to={todo.id} className="italic">{todo.id}</Link>
            </th>
            <td className="px-6 py-4">
              {todo.title}
            </td>
            <td className="px-6 py-4">
              {String(todo.completed)}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoListView
