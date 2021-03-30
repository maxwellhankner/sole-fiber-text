import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Designer from './pages/Designer';
// import UserProvider from './context/UserProvider';
import Landing from './pages/Landing';

// function Test() {
//   return <div>hello</div>;
// }

function App() {
  return (
    <div className="App">
      <Router>
        {/* <UserProvider> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/designer" component={Designer} />
        </Switch>
        {/* </UserProvider> */}
      </Router>
    </div>
  );
}

export default App;
