import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Home />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
