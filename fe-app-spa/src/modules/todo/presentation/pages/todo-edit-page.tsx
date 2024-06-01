import ApiRoutes from "@/core/api/api-routes.ts";
import {LoaderFunctionArgs, NavLink, useLoaderData, useNavigate} from "react-router-dom";
import {Todo} from "@/modules/todo/domain/todo.ts";
import TodoView from "@/modules/todo/presentation/views/todo-view.tsx";
import {useCallback, useState} from "react";
import ApiClient from "@/core/api/api-client.ts";

async function loader({ params }: LoaderFunctionArgs) {
  const res = await ApiClient.get(ApiRoutes.TODO_ITEM(params.todoId!))

  if(!res.ok) {
    throw new Error(`Could not fetch todo (${JSON.stringify(res)})`)
  }

  const todo = await res.json()
  return todo as Todo
}

function Component() {
  const todo = useLoaderData() as Awaited<ReturnType<typeof loader>>

  const navigate = useNavigate();

  const [title, setTitle] = useState(todo.title)
  const [completed, setCompleted] = useState(todo.completed)

  const onSave = useCallback(() => {
    ApiClient.post(ApiRoutes.TODO(), { ...todo, title, completed }).then(() => navigate('..'))
  }, [todo.id, title, completed])

  const onDelete = useCallback(() => {
    ApiClient.delete(ApiRoutes.TODO_ITEM(todo.id)).then(() => navigate('..'))
  }, [todo.id])

  return (
    <div className="size-full">
      <TodoView id={todo.id} title={title} onTitleChange={setTitle} completed={completed} onCompletedChange={setCompleted} />
      <div className="flex justify-between p-8">
        <div className="flex gap-2">
          <button
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onSave}
          >
            Save
          </button>
          <NavLink to=".." className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Abort</NavLink>
        </div>
        <button
          className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export {Component, loader}
