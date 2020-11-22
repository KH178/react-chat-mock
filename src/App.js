import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Local Components
import SetupScreen from './pages/SetupScreen'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <SetupScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
