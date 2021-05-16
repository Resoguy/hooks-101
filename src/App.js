import React, {useState} from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './components/HomePage';
import Counter from './components/Counter';
import {CountContext} from './store';
import s from './App.module.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={[count, setCount]}>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
          </nav>
          <h1>Hooks App</h1>

          <hr />

          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </div>
      </Router>
    </CountContext.Provider>
  );
}

export default App;
