import ApiRoutes from "@/core/api/api-routes.ts";
import {Todo} from "@/modules/todo/domain/todo.ts";
import {Link, useLoaderData} from "react-router-dom";
import TodoListView from "@/modules/todo/presentation/views/todo-list-view.tsx";
import ApiClient from "@/core/api/api-client.ts";

async function loader(): Promise<Todo[]> {
  const res = await ApiClient.get(ApiRoutes.TODO())

  if(!res.ok) {
    throw new Error(`Could not fetch todos (${JSON.stringify(res)})`)
  }

  const todos = await res.json()
  return todos as Todo[]
}

function Component() {
  const todos = useLoaderData() as Awaited<ReturnType<typeof loader>>

  return (
    <div className="size-full">
      <TodoListView todos={todos} />
      <div className="p-8">
        <Link to="create" className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">New ToDo</Link>
      </div>
    </div>
  )
}

export { Component, loader }
