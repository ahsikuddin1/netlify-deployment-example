import React from 'react';
import { Link, Route } from 'react-router-dom';

import Team from './Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/team/Bits Please">Bits Please</Link>
        <Link to="/team/Smacké">Smacké</Link>
        <Link to="/team/Breaking Bad Habits">Breaking Bad Habits</Link>
        <Link to="/team/Team Bleu">Team Bleu</Link>
      </nav>
      <main>
        <Route path="/team/:name">
          <Team />
        </Route>
      </main>
    </div>
  );
}

export default App;
