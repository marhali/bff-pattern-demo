import {NavLink} from "react-router-dom";

function AppHeader() {
  return (
    <header>
      <nav className="bg-blue-900 text-white px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">BFF Demo</span>
          </a>
          <div className="flex items-center space-x-2">
            <NavLink to="/todo" className={({isActive}) => isActive ? 'underline' : ''}>ToDo's</NavLink>
          </div>
          <div className="flex items-center space-x-2">
            profile
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader
