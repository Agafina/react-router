import { BrowserRouter as Router , Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DisplayNotes from "./pages/DisplayNotes";
import AddNote from "./pages/AddNote";
import NoteContextProvider from "./context/noteContext";

function App() {
  return (
    <div className="App">
      <Router>
        <NoteContextProvider>
        <nav>
        <ul>
          <NavLink to ="/">Home</NavLink>
          <NavLink to = 'about'>About</NavLink>
        </ul>
      </nav>
      
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="about" element ={<About />} />
           
          </Routes>
          <DisplayNotes />
            <AddNote />
        </NoteContextProvider>
      </Router>

    </div>
  );
}

export default App;
