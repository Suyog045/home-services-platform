import { RouterProvider} from "react-router-dom"
import Routes from "./Routes/Routes"
import { ThemeConfig } from "flowbite-react"
function App() {
  return (
    <>
    <ThemeConfig dark={false} />
    <RouterProvider router={Routes}/>
    </>
  )
}

export default App
