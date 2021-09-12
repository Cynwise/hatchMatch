import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import LandingPage from "./pages/landingpage/landingpage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
