import { BookList } from './components/BookList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<BookList />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
