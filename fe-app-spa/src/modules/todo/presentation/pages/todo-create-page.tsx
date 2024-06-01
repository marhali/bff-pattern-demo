import {useCallback, useState} from "react";
import TodoView from "@/modules/todo/presentation/views/todo-view.tsx";
import ApiRoutes from "@/core/api/api-routes.ts";
import {NavLink, useNavigate} from "react-router-dom";
import ApiClient from "@/core/api/api-client.ts";

function Component() {

  const navigate = useNavigate()

  const [id] = useState(crypto.randomUUID())
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)

  const onCreate = useCallback(() => {
    ApiClient.post(ApiRoutes.TODO(), { id, title, completed }).then(() => navigate('..'))
  }, [id, title, completed])

  return (
    <div className="size-full">
      <TodoView
        id={id}
        title={title}
        onTitleChange={setTitle}
        completed={completed}
        onCompletedChange={setCompleted}
      />
      <div className="flex justify-between p-8">
        <div className="flex gap-2">
          <button
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onCreate}
          >
            Create
          </button>
          <NavLink to=".." className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Abort</NavLink>
        </div>
      </div>
    </div>
  )
}

export { Component }
