import ScreenLayout from "@/core/ui/presentation/layouts/screen-layout.tsx";
import CenterLayout from "@/core/ui/presentation/layouts/center-layout.tsx";

function Component() {
  return (
    <ScreenLayout>
      <CenterLayout>
        <div className="bg-gray-800 rounded shadow-xl p-8 text-white flex flex-col gap-4 justify-center items-center">
          <h1 className="text-xl font-bold">BFF Demo</h1>
          <hr />
          <a href="/api/oauth2/authorization/gateway" className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Login</a>
        </div>
      </CenterLayout>
    </ScreenLayout>
  )
}

export {Component}
