import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
            <Route path='*' exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

