import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
       <Home />
      
          <Route path="/home">
           
         
          </Route>
      </Router>
    
  );
}

export default App;
