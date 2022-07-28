import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ListBooksComponent from './components/TopTenBooksComponent';
import CreateBookComponent from './components/CreateBookComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path = "/" exact element = {<ListBooksComponent/>}/>
              <Route path = "/top-10" element = {<Navigate to="/top-10-books"/>}/>
              <Route path = "/create-book" element = {<CreateBookComponent/>}/>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
