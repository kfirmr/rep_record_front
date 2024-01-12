// Router
import { ROUTES } from "./router/routes"

// External liberaries
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
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
