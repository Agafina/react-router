import { Route,  NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./NotFound"


import PageLayout from "./layout/PageLayout";
import HelpLayout from "./layout/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<PageLayout />}>
          <Route index element ={<Home />} />
          <Route path="about" element ={<About />} />
          <Route path="help" element = {<HelpLayout />} >
            <Route path="faq" element ={<Faq />} />
            <Route path="contact" element ={<Contact />} />
          </Route>

          <Route path="*" element = {<NotFound />}/>
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
