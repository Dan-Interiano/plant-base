import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Product from './components/Products/Product';
import SignUp from './components/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/products' exact component={Product} />
        <Route path='/sign-up' exact component={SignUp} />
        <Home />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
