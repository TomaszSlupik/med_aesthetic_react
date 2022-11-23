import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      
      <Router>
      <Menu />
        <Routes>
              <Route path='/' element={<Header />} />
             <Route path='/services' element={<Services />} />
             <Route path='*' element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
