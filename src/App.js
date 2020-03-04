import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={CharacterList} />
          <Route path="/character/:id" component={CharacterCard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;