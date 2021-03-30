import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Designer from './pages/Designer';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/designer" component={Designer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
