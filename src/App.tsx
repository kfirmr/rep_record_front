// Router
import { ROUTER } from "./router/router"

// External liberaries
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {ROUTER.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
