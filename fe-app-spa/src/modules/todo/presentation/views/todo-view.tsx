import {Todo} from "@/modules/todo/domain/todo.ts";

type TodoProps = Todo & {
  onTitleChange: (newTitle: string) => void
  onCompletedChange: (newCompleted: boolean) => void
}

function TodoView(props: TodoProps) {
  const { id, title, onTitleChange, completed, onCompletedChange } = props;

  return (
    <form className="w-full max-w-xl p-2">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="id"
          >
            ID
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="id"
            type="text"
            disabled
            value={id}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="title"
          >
            Title
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="title"
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 leading-tight"
            type="checkbox" checked={completed}
            onChange={(e) => onCompletedChange(e.target.checked)}
          />
          <span className="text-sm">
            Completed
          </span>
        </label>
      </div>
    </form>
  )
}

export default TodoView
