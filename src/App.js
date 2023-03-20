import './App.css';
import Body from './component/Body';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  document.body.style.backgroundColor = "#212121";
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} >
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
