import { lazy } from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

const Home = lazy(() => import("@/pages/home"))

const MainRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default MainRouter