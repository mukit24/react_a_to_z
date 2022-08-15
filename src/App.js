import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import Nav from "./components/Nav";
import Form from "./components/Form";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/user' element={<User name='Mukit' age='24' />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path='/data-fetching' element={<DataFetching/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App