import { Route,  NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


import PageLayout from "./layout/PageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<PageLayout />}>
          <Route index element ={<Home />} />
          <Route path="about" element ={<About />} />
    </Route>
  )
)


function App() {
  return (
    <div className="App">
      
    <RouterProvider router ={router}/>

    </div>
  );
}

export default App;
