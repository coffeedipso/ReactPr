import './App.css';
import Button from 'react-bootstrap/Button';
import Start from './components/pages/start/Start';
import Header from './components/header/Header';
import Builder from './components/pages/builder/Builder';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
