import './App.css';
import './components/Favorites'
import './components/Homepage'
import './components/Yourprofile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path='/' exact />
    </Switch>
    </Router>
    </>
  );
}

export default App;
