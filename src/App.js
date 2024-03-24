import { Route,  NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./NotFound"


import PageLayout from "./layout/PageLayout";
import HelpLayout from "./layout/HelpLayout";
import CareerLayout from "./layout/CareerLayout";
import Careers, { careerLoader } from "./Careers";
import CareerDetails, { careerDetails } from "./pages/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<PageLayout />}>
          <Route index element ={<Home />} />
          <Route path="about" element ={<About />} />
          <Route path="help" element = {<HelpLayout />} >
            <Route path="faq" element ={<Faq />} />
            <Route path="contact" element ={<Contact />} />
          </Route>

          <Route path="careers" element ={<CareerLayout />}>
            <Route 
            index 
            element={<Careers />}
            loader={careerLoader}
            />
            <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetails}
            />
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
